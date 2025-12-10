/** biome-ignore-all lint/suspicious/noExplicitAny: <hoho> */

import axios, { type AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import cryptoJs from "crypto-js";
import { HttpsProxyAgent } from "https-proxy-agent";
import { APP_MIX, BASE_URL } from "./constants";
import { getRandomProxy } from "./utils";

const MAX_RETRY = Number.POSITIVE_INFINITY;

type TConfig = Omit<AxiosRequestConfig, "baseURL" | "httpsAgent"> & {
	/**
	 * gọi thẳng link không qua base url
	 */
	direction?: boolean;
	headers: {
		token: string;
		[key: string]: string;
	};
	withAgent?: boolean;
};

axiosRetry(axios, {
	retries: MAX_RETRY,
	retryDelay: (retryCount, err) => {
		return axiosRetry.exponentialDelay(retryCount, err, 500);
	},
	retryCondition: (err) => {
		return (
			axiosRetry.isNetworkOrIdempotentRequestError(err) ||
			err.response?.status === 429 ||
			(err.response?.data as { message?: string })?.message ===
				"Too Many Attempts."
		);
	},
	onRetry: (retryCount, err, requestConfig) => {
		console.log(
			`Retrying [${retryCount}] - ${requestConfig.method?.toUpperCase()} ${
				requestConfig.url
			} due to ${err.message}`,
		);
	},
});

export const apiWithDecrypt = async <T = any>(config: TConfig) => {
	const {
		method,
		url,
		direction = false,
		headers,
		withAgent = true,
		...rest
	} = config;

	const httpsAgent = withAgent
		? new HttpsProxyAgent(getRandomProxy())
		: undefined;

	const res = await axios({
		method,
		baseURL: direction ? undefined : BASE_URL,
		url,
		httpsAgent,
		headers: {
			...headers,
			lang: "vi",
		},
		...rest,
	}).then((res) => res.data);

	if (res && typeof res === "object" && "data" in res) {
		if (typeof res.data !== "string") {
			return res as T;
		}

		const encryptedJson = JSON.parse(atob(res.data.substr(13)));

		const decryptedJson = cryptoJs.AES.decrypt(
			encryptedJson.value,
			cryptoJs.enc.Base64.parse(APP_MIX),
			{
				iv: cryptoJs.enc.Base64.parse(encryptedJson.iv),
			},
		);

		const original = JSON.parse(
			decryptedJson.toString(cryptoJs.enc.Utf8) || "{}",
		);

		res.data = original;
	}

	return res as T;
};

export const callApi = async <T = any>(config: TConfig) => {
	const {
		direction = false,
		method,
		url,
		headers,
		withAgent = true,
		...rest
	} = config;

	const httpsAgent = withAgent
		? new HttpsProxyAgent(getRandomProxy())
		: undefined;

	const res = await axios({
		method,
		baseURL: direction ? undefined : BASE_URL,
		url,
		httpsAgent,
		headers: {
			...headers,
			lang: "vi",
		},
		...rest,
	}).then((res) => res.data);

	return res as T;
};

export const publicApi = async <T = any>(
	config: Omit<TConfig, "headers"> & {
		headers?: Record<string, string>;
	},
) => {
	const { direction = false, method, url, ...rest } = config;

	const res = await axios({
		method,
		baseURL: direction ? undefined : BASE_URL,
		url,
		headers: {
			lang: "vi",
		},
		...rest,
	}).then((res) => res.data);

	return res as T;
};
