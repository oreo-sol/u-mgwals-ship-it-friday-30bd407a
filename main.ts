import { mkdirSync, writeFileSync } from "node:fs";

const A = "deploy: Friday 4:59pm, tests green in my head, ";
const B = "merging to prod — see you Monday";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", A + B);
