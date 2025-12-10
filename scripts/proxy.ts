// with-script scripts/proxy.ts

import fs from "fs";

const raw = fs.readFileSync(
	"/home/dev/Documents/trektoeic/scripts/http.txt",
	"utf8",
);

const out = raw
	.split(/\r?\n/)
	.map((x) => x.trim())
	.filter(Boolean)
	.map((x) => `"${x}",`)
	.join("\n");

fs.writeFileSync("d", out);

console.log("✔ Done! Saved to output.txt");
