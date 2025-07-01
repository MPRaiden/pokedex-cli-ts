export function commandHelp(state) {
    console.log("Welcome to the Pokedex!\n");
    console.log("Usage:\n\n");
    for (const callback of Object.values(state.commands)) {
        console.log(`${callback.name}: ${callback.description}\n`);
    }
    state.readline.prompt();
}
