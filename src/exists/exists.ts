/**
 * A predicate that determines whether or not `t` exists.
 *
 * Useful when you have an array of potentially undefined values.
 *
 * @example
 * const arr: (string | undefined)[] = ["Foo", undefined, "Bar"]
 *
 * // Function requires a string, cannot accept undefined
 * const reverse = (str: string): string => str.split("").reverse().join("")
 *
 * arr
 *  .map(reverse) // Typescript error - some values might be undefined
 *
 * arr
 *  .filter(exists)
 *  .map(reverse) // No typescript error
 */
export const exists = <T>(t: T | undefined): t is T => !!t
