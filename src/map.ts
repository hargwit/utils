/**
 * A curried function that applies the `transform` over the array.
 *
 * Useful when mapping over arrays returned from promises.
 *
 * @example
 * const arrPromise = Promise.resolve([1, 2, 3])
 *
 * const double = (x: number): number => x * 2
 *
 * arrPromise
 *  .then(map(double))
 *  .then(console.log) // [2, 4, 6]
 *
 */
export function map<A, B>(transform: (value: A) => B): (array: Array<A>) => Array<B> {
    return function (array: Array<A>): Array<B> {
        return array.map(transform)
    }
}
