import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "I never took the key.",
  "I asked, and it came warm",
  "from another hand.",
  "The lock clicks like a small yes.",
  "Now the door knows my knock,",
  "and I leave it open for the next knock.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM + "\n", "utf8");
