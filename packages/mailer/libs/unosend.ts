import { env } from "@trektoeic/env";
import { Unosend } from "@unosend/node";

export const unosend = new Unosend(env.UNOSEND_API_KEY);
