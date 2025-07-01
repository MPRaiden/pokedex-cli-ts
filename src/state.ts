import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type State = {
	readline: Interface,
	commands: { [command: string]: CLICommand }
}

export type CLICommand = {
	name: string;
	description: string;
	callback: (state: State) => void;
}

export function initState() {
	const readInput = createInterface(
		{
			input: process.stdin,
			output: process.stdout,
			prompt: "Pokedex > ",
		}
	)

	const registry = {
		exit: {
			name: "exit",
			description: "Exits the pokedex",
			callback: commandExit,
		},
		help: {
			name: "help",
			description: "Displays help information",
			callback: commandHelp,
		},
	}

	const state: State = {
		readline: readInput,
		commands: registry
	}

	return state
}
