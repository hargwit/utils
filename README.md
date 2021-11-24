# utils

A number of common utility functions with no dependencies. Typescript is fully supported and the types for the utilities are included in the package.

## Contents

- [Installation](#installation)
- [Utils](#utils)
  - [benchmark](#benchmark)
  - [benchmarkAsync](#benchmarkAsync)
  - [by](#by)
  - [exists](#exists)
  - [filter](#filter)
  - [has](#has)
  - [label](#label)
  - [map](#map)
  - [omit](#omit)
  - [pluck](#pluck)
  - [trace](#trace)

## Installation

```sh
npm install @hargwit/utils
```

## Utils

### benchmark

Records how long a function takes to execute before logging both
the provided label and the time taken to run.

Logs the benchmark even if the function throws.

If no label is specified then logs the name of the function.

```ts
const foo = benchmark(fooRepository.get)() // get took 50ms

const bar = benchmark(barRepository.get, 'getBar')() // getBar took 70ms

benchmark(fooRepository.throws)() // throws threw in 20ms
```

### benchmarkAsync

Records how long an async function takes to execute including how long it takes for the resulting promise to complete.
Logs both the provided label and the time taken to run.

Logs the benchmark even if the promise throws.

If no label is specified then logs the name of the function.

```ts
const foo = await benchmark(fooRepository.get)() // get resolved in 50ms

const bar = await benchmark(barRepository.get, 'getBar')() // getBar resolved in 70ms

await benchmark(fooRepository.throws)() // throws threw in 20ms
```

### by

Builds a predicate that returns whether or not an object has a property with the same value.

Useful when filtering or finding by a specific property value.

```ts
type Obj = { foo: string }

const arr: Obj[] = [{ foo: 'bar', foo: 'baz' }]

const result = arr.find(by('foo', 'bar'))

console.log(result) = { foo: 'bar' }
```

### exists

A predicate that determines whether or not `t` exists.

Useful when you have an array of potentially undefined values.

```ts
const arr: (string | undefined)[] = ['Foo', undefined, 'Bar']

// Function requires a string, cannot accept undefined
const reverse = (str: string): string => str.split('').reverse().join('')

arr.map(reverse) // Typescript error - some values might be undefined

arr.filter(exists).map(reverse) // No typescript error
```

### filter

A curried function takes an array and filters it by the `predicate`.
Useful when handling arrays returned from promises.

```ts
const arrPromise = Promise.resolve([1, 2, 3, 4])

const isEven = (x: number): boolean => x % 2 === 0

arrPromise.then(filter(isEven)).then(console.log) // [2, 4]
```

### has

A curried predicate that returns whether or not the object has the key.

If the key value is undefined then the function returns false.

Useful when filtering an array of objects.

```ts
type Obj = { foo?: number; bar: number }

const arr: Obj[] = [{ foo: 1, bar: 2 }, { bar: 2 }]

arr.filter(has('foo')).forEach(console.log) // { foo: 1, bar: 2 }
```

### label

This function logs the label and value and returns the value. Useful for debugging piped functions.

```ts
const prom = Promise.resolve('Foo')

prom
 .then(label('The value is:')) // The value is: Foo
 .then(doSomething)

const arr = ['Foo', 'Bar']

const foos = arr
 .map(label('before')) // before Foo, before Bar
 .filter((val) => val === 'Foo')
 .map(label('after')) // after Foo
```

### map

A curried function that applies the `transform` over the array.

Useful when mapping over arrays returned from promises.

```ts
const arrPromise = Promise.resolve([1, 2, 3])

const double = (x: number): number => x * 2

arrPromise.then(map(double)).then(console.log) // [2, 4, 6]
```

### omit

Takes an object and a key name and returns the object without the specified key.
The original object is not modified.

```ts
const obj = { foo: 'bar' }

const omitted = omit(obj, 'foo')

console.log(omitted.foo) // undefined
```

### pluck

Pluck is a curried function that returns the value of the property on the object.

Useful for mapping operations.

```ts
type Obj = { foo: string }

const arr: Obj[] = [{ foo: 'bar' }, { foo: 'baz' }]

arr.map(pluck('foo')).forEach(console.log) // bar, baz
```

### trace

This function logs the value and returns it. Useful for debugging piped functions.

```ts
const prom = Promise.resolve('Foo')

prom
 .then(trace) // Foo
 .then(doSomething)

const arr = ['Foo', 'Bar']

const foos = arr
 .map(trace) // Foo, Bar
 .filter((val) => val === 'Foo')
 .map(trace) // Foo
```
