export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache;
    constructor(cache) {
        this.cache = cache;
    }
    async fetchLocations(pageURL) {
        try {
            const url = pageURL ?? PokeAPI.baseURL + "/location-area";
            // Check for cached results first
            const cached = this.cache.get(url);
            if (cached) {
                return cached;
            }
            // If not send request and cache results
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`function fetchLocations() response not ok, response status code- ${response.status}`);
            }
            const data = await response.json();
            // Add to cache
            this.cache.add(url, data);
            return data;
        }
        catch (error) {
            throw new Error(`function fetchLocations() response not ok, error - ${error}`);
        }
    }
    async fetchLocation(locationName) {
        try {
            const url = PokeAPI.baseURL + "/location-area/" + locationName;
            // Check for cached results
            const cached = this.cache.get(url);
            if (cached) {
                return cached;
            }
            // Else send request to API
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`function fetchLocation() response not ok, response status code - ${response.status}`);
            }
            const data = await response.json();
            // Cache new results
            this.cache.add(url, data);
            return data;
        }
        catch (error) {
            throw new Error(`function fetchLocation() response not ok, error - ${error}`);
        }
    }
}
