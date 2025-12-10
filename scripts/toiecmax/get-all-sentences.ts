// with-script scripts/toeicmax/get-all-sentences.ts
import { getAllSentences } from "../../packages/crawler/src/toeic-max/crawler/crawl-sentence";

const main = async () => {
	await getAllSentences();
};

main();
