/**
 * Records how long the function takes to execute before printing both
 * the provided label and the time taken to run.
 *
 * Prints the benchmark even if the function throws.
 *
 * @example
 *
 * const foo = benchmark(fooRepository.get)() // get took 50ms
 *
 * const bar = benchmark(barRepository.get, "getBar")() // getBar took 70ms
 *
 * benchmark(fooRepository.throws)() // throws threw in 20ms
 */
export function benchmark<Args extends unknown[], Z>(fn: (...args: Args) => Z, label?: string): (...args: Args) => Z {
    return function (...args) {
        const before = Date.now()

        try {
            const result = fn(...args)

            const after = Date.now()

            console.log(`${label || fn.name} took ${after - before}ms`)

            return result
        } catch (error) {
            const after = Date.now()

            console.log(`${label || fn.name} threw in ${after - before}ms`)

            throw error
        }
    }
}

/**
 * Records how long a function takes to execute including how long it takes for the resulting promise to complete.
 * Prints both the provided label and the time taken to run.
 *
 * Prints the benchmark even if the promise throws.
 *
 * @example
 *
 * const foo = benchmark(fooRepository.get)() // get resolved in 50ms
 *
 * const bar = benchmark(barRepository.get, "getBar")() // getBar resolved in 70ms
 *
 * benchmark(fooRepository.throws)() // throws threw in 20ms
 */
export function benchmarkAsync<Args extends unknown[], Z>(
    fn: (...args: Args) => Promise<Z>,
    label?: string
): (...args: Args) => Promise<Z> {
    return async function (...args) {
        const before = Date.now()

        try {
            const result = await fn(...args)

            const after = Date.now()

            console.log(`${label || fn.name} resolved in ${after - before}ms`)

            return result
        } catch (error) {
            const after = Date.now()

            console.log(`${label || fn.name} threw in ${after - before}ms`)

            throw error
        }
    }
}
