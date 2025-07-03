export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, { createdAt: Date.now(), val });
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (entry) {
            return entry.val;
        }
        return undefined;
    }
    #reap() {
        for (const [key, cache] of this.#cache.entries()) {
            if ((Date.now() - cache.createdAt) > this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        if (this.#reapIntervalId === undefined) {
            this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
        }
    }
    stopReapLoop() {
        if (this.#reapIntervalId !== undefined) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}
