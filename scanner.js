import { providers } from "./providers.js";

export function scanRAM(memoryGB) {
  const results = providers.map(p => ({
    ...p,
    totalCost: p.pricePerGBHour * memoryGB
  }));

  results.sort((a, b) => a.totalCost - b.totalCost);
  return results;
}
