import { pluck } from './pluck'

test('should get the value of the key', () => {
    type Obj = { foo: string }

    const arr: Obj[] = [{ foo: 'bar' }, { foo: 'baz' }]

    const result = arr.map(pluck('foo'))

    expect(result).toHaveLength(arr.length)

    expect(result).toContain('bar')

    expect(result).toContain('baz')
})
