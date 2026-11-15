// Bounty Hound ($HOUND) — make.fun coin-promo entry.
//
// Copies LAUNCH.json (the launched coin's mint and create signature)
// from the bot directory into the output directory, byte for byte.
// Uses only the Node.js standard library.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? "/bot");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const source = join(botDir, "LAUNCH.json");
const target = join(outDir, "LAUNCH.json");

if (!existsSync(source)) {
  console.error(`error: LAUNCH.json not found in bot directory: ${source}`);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(`error: failed to copy LAUNCH.json to ${target}: ${err}`);
  process.exit(1);
}
