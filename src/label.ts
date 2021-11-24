/**
 * A curried function that logs the `label` and `val` and returns `val`.
 * Useful for debugging.
 *
 * Simply drop into either a `map` or `then` callback:
 *
 * @example
 * const prom = Promise.resolve("Foo")
 *
 * prom
 *  .then(label("The value is:")) // The value is: Foo
 *  .then(doSomething)
 *
 *
 * const arr = ["Foo", "Bar"]
 *
 * const foos = arr
 *   .map(label("before")) // before Foo, before Bar
 *   .filter((val) => val === "Foo")
 *   .map(label("after")) // after Foo
 */
export function label<T>(label: string): (val: T) => T {
    return (val) => {
        console.log(label, val)

        return val
    }
}
