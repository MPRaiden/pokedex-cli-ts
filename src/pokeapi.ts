import { Cache } from './pokecache.js'

export class PokeAPI {
	private static readonly baseURL = "https://pokeapi.co/api/v2";
	private cache: Cache

	constructor(cache: Cache) {
		this.cache = cache
	}

	async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
		try {
			const url = pageURL ?? PokeAPI.baseURL + "/location-area"

			// Check for cached results first
			const cached = this.cache.get<ShallowLocations>(url)
			if (cached) {
				return cached
			}

			// If not send request and cache results
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error(`function fetchLocations() response not ok, response status code- ${response.status}`)
			}

			const data = await response.json()

			// Add to cache
			this.cache.add(url, data)

			return data
		} catch (error) {
			throw new Error(`function fetchLocations() response not ok, error - ${error}`)
		}
	}

	async fetchLocation(locationName: string): Promise<LocationInfo> {
		try {
			const url = PokeAPI.baseURL + "/location-area/" + locationName

			// Check for cached results
			const cached = this.cache.get<LocationInfo>(url)
			if (cached) {
				return cached
			}

			// Else send request to API
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error(`function fetchLocation() response not ok, response status code - ${response.status}`)
			}

			const data = await response.json()

			// Cache new results
			this.cache.add(url, data)

			return data
		} catch (error) {

			throw new Error(`function fetchLocation() response not ok, error - ${error}`)
		}
	}
}

export type Result = {
	name: string
	url: string
}

export type ShallowLocations = {
	count: number
	next: string
	previous: string | null
	results: Array<Result>
}

export type LocationInfo = {
	encounter_method_rates: EncounterMethodRate[]
	game_index: number
	id: number
	location: Location
	name: string
	names: Name[]
	pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
	encounter_method: EncounterMethod
	version_details: VersionDetail[]
}

export interface EncounterMethod {
	name: string
	url: string
}

export interface VersionDetail {
	rate: number
	version: Version
}

export interface Version {
	name: string
	url: string
}

export interface Location {
	name: string
	url: string
}

export interface Name {
	language: Language
	name: string
}

export interface Language {
	name: string
	url: string
}

export interface PokemonEncounter {
	pokemon: Pokemon
	version_details: VersionDetail2[]
}

export interface Pokemon {
	name: string
	url: string
}

export interface VersionDetail2 {
	encounter_details: EncounterDetail[]
	max_chance: number
	version: Version2
}

export interface EncounterDetail {
	chance: number
	condition_values: any[]
	max_level: number
	method: Method
	min_level: number
}

export interface Method {
	name: string
	url: string
}

export interface Version2 {
	name: string
	url: string
}
