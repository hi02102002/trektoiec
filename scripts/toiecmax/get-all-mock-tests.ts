//  with-script scripts/toeicmax/get-all-mock-tests.ts
import { getAllMockTests } from "../../packages/crawler/src/toeic-max/crawler/crawl-mock-test";

const main = async () => {
	await getAllMockTests();
};

main();
