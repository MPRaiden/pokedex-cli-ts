export async function commandExplore(state, ...args) {
    const location = args[0];
    if (!location) {
        console.log("Please provide a location");
        state.readline.prompt();
        return;
    }
    const locationInfo = await state.pokeapi.fetchLocation(location);
    const pokemon = locationInfo.pokemon_encounters;
    console.log(`Exploring ${location}...`);
    console.log(`Found pokemon:\n${pokemon.map((p) => `-${p.pokemon.name}`).join("\n")}`);
    state.readline.prompt();
}
