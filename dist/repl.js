import { createInterface } from "readline";
import { getCommands } from "./helpers.js";
export function cleanInput(input) {
    return input.trim().toLowerCase().split(" ").filter((word) => word !== "");
}
export const readInput = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
});
export function startREPL() {
    const commands = getCommands();
    readInput.prompt();
    readInput.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (!cleanedInput.length) {
            readInput.prompt();
        }
        else {
            if (Object.keys(commands).includes(cleanedInput[0])) {
                commands[cleanedInput[0]].callback(commands);
            }
            else {
                console.log("Unknown command\n");
                readInput.prompt();
            }
        }
    });
}
