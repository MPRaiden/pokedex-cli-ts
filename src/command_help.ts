import { CLICommand } from "./types.js";
import { readInput } from "./repl.js";

export function commandHelp(commands: Record<string, CLICommand>) {
	console.log("Welcome to the Pokedex!\n")
	console.log("Usage:\n\n")

	for (const callback of Object.values(commands)) {
		console.log(`${callback.name}: ${callback.description}\n`)
		readInput.prompt()
	}
}

