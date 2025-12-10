// with-script scripts/toeicmax/refresh-token.ts
import { refreshToken } from "../../packages/crawler/src/toeic-max/funcs";

const main = async () => {
	await refreshToken();
};

main();
