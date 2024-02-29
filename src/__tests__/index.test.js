import getBuffer from '../get_buffer';
import ArrayBufferConverter from '../index';

test('should convert', () => {
  const buffer = getBuffer();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  expect(result).toEqual(data);
});
