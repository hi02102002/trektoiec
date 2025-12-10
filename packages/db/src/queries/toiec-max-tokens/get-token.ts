import { db } from "../../db";

export const getToken = async () => {
	const token = await db.query.toeicMaxTokens.findFirst();
	return token?.token ?? null;
};
