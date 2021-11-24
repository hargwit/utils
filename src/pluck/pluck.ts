/**
 * Pluck is a curried function that returns the value of the property on the object.
 *
 * Useful for mapping operations.
 *
 * @example
 *
 * type Obj = { foo: string }
 *
 * const arr: Obj[] = [{ foo: "bar" }, { foo: "baz" }]
 *
 * arr
 *  .map(pluck("foo"))
 *  .forEach(console.log) // bar, baz
 *
 */
export const pluck =
    <T, K extends keyof T>(prop: K) =>
    (obj: T): T[K] =>
        obj[prop]
