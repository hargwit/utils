import { by } from './by'

test('finds objects with the property value', () => {
    type Obj = { foo: string }

    const arr: Obj[] = [{ foo: 'bar' }, { foo: 'baz' }]

    const result = arr.find(by('foo', 'bar'))

    expect(result).toEqual(arr[0])
})
