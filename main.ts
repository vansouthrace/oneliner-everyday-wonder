import { mkdirSync, writeFileSync } from "node:fs";
const entry = "The lift doors opened on a stranger humming my grandmother's lullaby, and for one floor, the whole building remembered her too.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
