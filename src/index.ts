import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/**
 * Entry point for the utility CLI.
 * Registers all sub-commands and delegates to yargs for argument parsing.
 */
export function start(): void {
  yargs(hideBin(process.argv))
    .command("status", "Show system status", {}, () => {
      console.log("✅ System OK");
    })
    .command("version", "Show version", {}, () => {
      console.log("v1.0.0");
    })
    .demandCommand(1, "⚠️  Specify a command. Run --help for options.")
    .help()
    .parse();
}

start();
