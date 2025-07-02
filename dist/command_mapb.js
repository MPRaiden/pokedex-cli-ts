export async function commandMapB(state) {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
    }
    else {
        const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
        // Updates state locations so we keep track where we are
        state.nextLocationsURL = locations.next;
        state.prevLocationsURL = locations.previous;
        for (const loc of locations.results) {
            console.log(loc.name);
        }
    }
    state.readline.prompt();
}
