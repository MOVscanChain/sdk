#!/usr/bin/env node

import { scanRAM } from "./scanner.js";

const args = process.argv.slice(2);
const memory = Number(args[0]) || 64;

console.log("🔍 MOVscan — Global RAM Scanner\n");
console.log(`Scanning prices for ${memory} GB RAM...\n`);

const results = scanRAM(memory);

results.forEach((r, i) => {
  console.log(
    `${i + 1}. ${r.name} (${r.region}) → $${r.totalCost.toFixed(4)} / hour`
  );
});

const best = results[0];
console.log("\n💡 Cheapest Option:");
console.log(
  `${best.name} in ${best.region} at $${best.pricePerGBHour}/GB-hour`
);
