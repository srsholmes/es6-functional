import test from 'ava';
import concat from '../concat'
const data = Array.from({ length: 5 }, (v, k) => k);

let fn = concat([1, 2, 3]);
let str = concat(' world!');

test('concat', t => {
  t.same(fn(data), [0, 1, 2, 3, 4, 1, 2, 3]);
  t.is(str('Hello'), 'Hello world!');
  t.same(concat(data, [1, 2, 3]), [1, 2, 3, 0, 1, 2, 3, 4]);
  t.same(concat([4, 5, 6])([1, 2, 3]), [1, 2, 3, 4, 5, 6])
});
