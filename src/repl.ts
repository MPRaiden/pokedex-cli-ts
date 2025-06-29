import { createInterface } from "readline"

export function cleanInput(input: string): Array<string> {
	return input.trim().toLowerCase().split(" ").filter((word) => word !== "")
}


const readInput = createInterface(
	{
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex > ",
	}
)

export function startREPL() {
	readInput.prompt()
	readInput.on("line", (input) => {
		const cleanedInput = cleanInput(input)

		if (!cleanedInput.length) {
			readInput.prompt()
		} else {
			console.log(`Your command was: ${cleanedInput[0]}`)
			readInput.prompt()
		}
	})
}
