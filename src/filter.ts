/**
 * A predicate function.
 */
type Predicate<A, B extends A> = ((value: A) => value is B) | ((value: A) => boolean)

/**
 * A curried function takes an array and filters it by the `predicate`.
 * Useful when handling arrays returned from promises.
 *
 * @example
 * const arrPromise = Promise.resolve([1, 2, 3, 4])
 *
 * const isEven = (x: number): boolean => x % 2 === 0
 *
 * arrPromise
 *  .then(filter(isEven))
 *  .then(console.log) // [2, 4]
 */
export function filter<A, B extends A>(predicate: Predicate<A, B>): (array: Array<A>) => Array<A> {
    return function (array: Array<A>): Array<A> {
        return array.filter(predicate)
    }
}
