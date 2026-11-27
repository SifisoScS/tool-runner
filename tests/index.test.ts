/**
 * Utility CLI — smoke tests.
 */

import { start } from "../src/index";

let passed = 0;
let failed = 0;

function assert(label: string, condition: boolean): void {
  if (condition) { console.log(`  ✅ ${label}`); passed++; }
  else           { console.error(`  ❌ ${label}`); failed++; }
}

assert("start is a function", typeof start === "function");

console.log(`\n${passed}/${passed + failed} assertions passed`);
if (failed > 0) process.exit(1);
