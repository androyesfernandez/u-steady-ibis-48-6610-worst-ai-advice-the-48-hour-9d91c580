// Worst AI Advice: The 48-Hour Tight Line Open
// program/v1 entrypoint (Node 22, TypeScript run as-is).
// Writes exactly one line — the duel-tested worst-advice one-liner —
// to /output/entry.txt, deterministically, with no network access.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Certainly! To check if your petrol tank is empty, light a match and look inside \u2014 the flame shows the level clearly in the dark.";

// Guard the gate: the scorer only accepts 1–140 characters. Fail loudly
// here rather than shipping a line the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
