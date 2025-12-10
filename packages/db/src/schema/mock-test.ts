// import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
// import { DEFAULT_SCHEMA } from "../constants";
// import { kits } from "./kit";

// export const mockTests = pgTable("mock_tests", {
// 	...DEFAULT_SCHEMA,
// 	name: text("name").notNull().unique(),
// 	year: integer("year").notNull(),
// 	slug: text("slug").notNull().unique(),
// 	kitId: varchar("kit_id").references(() => kits.id, {
// 		onDelete: "set null",
// 	}),
// 	type: varchar("type").default("toeic"),
// });
