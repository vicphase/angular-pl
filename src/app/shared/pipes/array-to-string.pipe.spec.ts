import { ArrayToStringPipe } from './array-to-string.pipe';

describe('ArrayToStringPipe', () => {
  it('should return a string from an array of string', () => {
    const value = ['test1', 'test2'];
    const expected = 'Test1, Test2';
    const pipe = new ArrayToStringPipe();

    expect(pipe.transform(value)).toEqual(expected);
  });
});
