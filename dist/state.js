import { createInterface } from "readline";
import { commandExit, } from "./command_exit.js";
import { commandMap } from "./command_map.js";
import { commandHelp } from "./command_help.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMapB } from "./command_mapb.js";
import { Cache } from "./pokecache.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inpect.js";
import { commandPokedex } from "./command_pokedex.js";
export function initState() {
    const readInput = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const registry = {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays help information",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays next locations results",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous locations results",
            callback: commandMapB,
        },
        explore: {
            name: "explore",
            description: "Explores the pokemon of a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attemps to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Displays information about a pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays pokemons in pokedex",
            callback: commandPokedex,
        },
    };
    const cache = new Cache(10000);
    const state = {
        readline: readInput,
        commands: registry,
        pokeapi: new PokeAPI(cache),
        nextLocationsURL: "https://pokeapi.co/api/v2/location-area",
        prevLocationsURL: null,
        location: null,
        pokedex: {},
    };
    return state;
}
