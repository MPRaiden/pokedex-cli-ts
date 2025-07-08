export async function commandPokedex(state) {
    console.log("Your pokedex:\n");
    for (const pokemon of Object.values(state.pokedex)) {
        console.log(`-${pokemon.name}-`);
    }
    state.readline.prompt();
}
