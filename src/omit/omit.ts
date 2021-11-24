/**
 * Takes an object and a key name and returns the object without the specified key.
 * The original object is not modified.
 *
 * @example
 * const obj = { foo: "bar" }
 *
 * const omitted = omit(obj, "foo")
 *
 * console.log(omitted.foo) // undefined
 */
export function omit<T extends Record<string | number | symbol, unknown>, K extends keyof T>(
    object: T,
    key: K
): Omit<T, K> {
    const { [key]: _, ...omittedObject } = object

    return omittedObject
}
