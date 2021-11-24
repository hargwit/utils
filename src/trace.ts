/**
 * Logs and returns `val`. Useful for debugging.
 *
 * Simply drop into either a `map` or `then` callback:
 *
 * @example
 * const prom = Promise.resolve("Foo")
 *
 * prom
 *  .then(trace) // Foo
 *  .then(doSomething)
 *
 *
 * const arr = ["Foo", "Bar"]
 *
 * const foos = arr
 *   .map(trace) // Foo, Bar
 *   .filter((val) => val === "Foo")
 *   .map(trace) // Foo
 */
export function trace<T>(val: T): T {
    console.log(val)

    return val
}
