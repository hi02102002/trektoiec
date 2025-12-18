import type { Kyselify } from "drizzle-orm/kysely";
import { Kysely, PostgresDialect } from "kysely";

import { pool } from "./db";
import type {
	account,
	kits,
	questions,
	sections,
	session,
	subQuestions,
	toeicMaxTokens,
	user,
	verification,
	vocabularies,
	vocabularyCategories,
} from "./schema";

export type KyselyDatabase = {
	user: Kyselify<typeof user>;
	session: Kyselify<typeof session>;
	account: Kyselify<typeof account>;
	verification: Kyselify<typeof verification>;
	kits: Kyselify<typeof kits>;
	questions: Kyselify<typeof questions>;
	sub_questions: Kyselify<typeof subQuestions>;
	sections: Kyselify<typeof sections>;
	toeic_max_tokens: Kyselify<typeof toeicMaxTokens>;
	vocabulary_categories: Kyselify<typeof vocabularyCategories>;
	vocabularies: Kyselify<typeof vocabularies>;
};

export const kyselyDb = new Kysely<KyselyDatabase>({
	dialect: new PostgresDialect({ pool }),
});
