export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            const response = pageURL !== undefined ? await fetch(pageURL) : await fetch(PokeAPI.baseURL + "location-area");
            if (!response.ok) {
                throw new Error(`function fetchLocations() response not ok, response.text - ${response.text}`);
            }
            return await response.json();
        }
        catch (error) {
            throw new Error(`function fetchLocations() response not ok, error - ${error}`);
        }
    }
    async fetchLocation(locationName) {
        try {
            const response = await fetch(PokeAPI.baseURL + "location-area/" + locationName);
            if (!response.ok) {
                throw new Error(`function fetchLocation() response not ok, response.text - ${response.text}`);
            }
            return await response.json();
        }
        catch (error) {
            throw new Error(`function fetchLocation() response not ok, error - ${error}`);
        }
    }
}
