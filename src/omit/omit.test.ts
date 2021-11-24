import { omit } from './omit'

test('should remove property', () => {
    const obj = { foo: 'obj' }

    const omitted = omit(obj, 'foo')

    expect(omitted).toEqual({})
})
