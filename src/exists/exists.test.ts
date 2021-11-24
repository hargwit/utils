import { exists } from './exists'

test('should filter undefined', () => {
    const arr: (string | undefined)[] = ['Foo', undefined, 'Bar']

    const result = arr.filter(exists)

    expect(result).not.toContain(undefined)
})
