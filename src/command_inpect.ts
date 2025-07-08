import { State } from "./state.js"

export async function commandInspect(state: State, pokemon: string) {
	if (state.pokedex[pokemon]) {
		console.log(`Name: ${state.pokedex[pokemon].name}\n`)
		console.log(`Height: ${state.pokedex[pokemon].height}m\n`)
		console.log(`Weight: ${state.pokedex[pokemon].weight}kg\n`)

  console.log("Stats:");
  for (const stat of state.pokedex[pokemon].stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
	console.log("Types:")
	for (const type of state.pokedex[pokemon].types) {
		console.log(`  -${type.type.name}`)
	}

	} else {
		console.log("you have not caught that pokemon\n")
	}

	state.readline.prompt()
}
