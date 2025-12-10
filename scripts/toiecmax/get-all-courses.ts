// with-script scripts/toeicmax/get-all-courses.ts

import { getAllCourses } from "../../packages/crawler/src/toeic-max/crawler/crawl-course";

const main = async () => {
	await getAllCourses();
};

main();
