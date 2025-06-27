export function cleanInput(input: string): Array<string> {
	return input.trim().toLowerCase().split(" ").filter((word) => word !== "")
}
