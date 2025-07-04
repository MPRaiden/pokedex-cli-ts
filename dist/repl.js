export function cleanInput(input) {
    return input.trim().toLowerCase().split(" ").filter((word) => word !== "");
}
export async function startREPL(state) {
    const commands = state.commands;
    state.readline.prompt();
    state.readline.on("line", (input) => {
        const cleanedInput = cleanInput(input);
        if (!cleanedInput.length) {
            state.readline.prompt();
        }
        else {
            if (Object.keys(commands).includes(cleanedInput[0])) {
                commands[cleanedInput[0]].callback(state, ...cleanedInput.slice(1));
            }
            else {
                console.log("Unknown command\n");
                state.readline.prompt();
            }
        }
    });
}
