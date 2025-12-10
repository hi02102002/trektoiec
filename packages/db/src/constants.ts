import { createId, SIZE_OF_ID } from "@trektoeic/utils/create-id";
import { timestamp, varchar } from "drizzle-orm/pg-core";

export const DEFAULT_SCHEMA = {
	id: varchar("id", {
		length: SIZE_OF_ID,
	})
		.primaryKey()
		.$defaultFn(() => createId()),
	updatedAt: timestamp("updated_at")
		.$onUpdate(() => /* @__PURE__ */ new Date())
		.notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
} as const;
