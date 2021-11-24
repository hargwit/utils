/**
 * Builds a predicate that returns whether or not an object has a property with the same value.
 *
 * @example
 * type Obj = { foo: string }
 *
 * const arr: Obj[] = [{ foo: "bar", foo: "baz" }]
 *
 * const result = arr
 *                  .find(by("foo", "bar"))
 *
 * console.log(result) = { foo: "bar" }
 */
export const by =
    <T, R extends { [prop: string]: T | unknown }>(prop: string, val: T) =>
    (obj: R): boolean => {
        if (obj[prop] === undefined) {
            return false
        }

        return obj[prop] === val
    }
