/**
 * A curried predicate that returns whether or not the object has the key.
 *
 * If the key value is undefined then the function returns false.
 *
 * Useful when filtering an array of objects.
 *
 * @example
 * type Obj = { foo?: number; bar: number }
 *
 * const arr = [{foo: 1, bar: 2}, { bar: 2}]
 *
 * arr
 *  .filter(has("foo"))
 *  .forEach(console.log) // { foo: 1, bar: 2 }
 */
export const has =
    <O, K extends keyof O, T extends O[K]>(key: K) =>
    (obj: O): obj is O & Record<K, NonNullable<T>> =>
        !!obj[key]
