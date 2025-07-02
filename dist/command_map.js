export async function commandMap(state) {
    const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
    state.readline.prompt();
}
