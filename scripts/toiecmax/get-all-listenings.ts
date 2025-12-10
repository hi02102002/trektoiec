// with-script scripts/toeicmax/get-all-listenings.ts
import { getAllListeningsWithDetail } from "../../packages/crawler/src/toeic-max/crawler/crawl-listening";

const main = async () => {
	await getAllListeningsWithDetail();
};

main();
