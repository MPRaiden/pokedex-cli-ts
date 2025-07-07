import { State } from "./state.js"

export async function commandCatch(state: State, pokemon: string) {
	console.log(`Throwing a Pokeball at ${pokemon}...\n`)

	const pokeData = await state.pokeapi.fetchPokemon(pokemon)
	const pokemonExp = pokeData.base_experience

	const randExp = Math.floor(Math.random() * 300)

	if (randExp > pokemonExp) {
		console.log(`${pokemon} was caught!\n`)
		state.pokedex[pokemon] = pokeData
	} else {
		console.log(`${pokemon} escaped!\n`)
	}

	state.readline.prompt()
}
