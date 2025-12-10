// with-script scripts/toeicmax/get-all-vocabs.ts
import { getAllVocabs } from "../../packages/crawler/src/toeic-max/crawler/crawl-voca";

const main = async () => {
	await getAllVocabs();
};

main();
