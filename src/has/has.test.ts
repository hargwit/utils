import { has } from './has'

test('should identify objects missing the property', () => {
    type Obj = {
        foo?: number
        bar: number
    }

    const arr: Obj[] = [{ foo: 1, bar: 2 }, { bar: 2 }]

    const result = arr.filter(has('foo'))

    expect(result.length).toEqual(1)

    expect(result[0]).toEqual(arr[0])
})
