// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";
async function main() {
    try {
        const state = initState();
        await startREPL(state);
    }
    catch (error) {
        throw new Error(`function main() - error during exec ${error}`);
    }
}
await main();
