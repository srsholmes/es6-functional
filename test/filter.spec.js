import test from 'ava';
import filter from '../filter';

const isEven = x => x % 2 === 0;
const isGreaterThanFive = x => x > 5;
const data = Array.from({ length: 10 }, (v, k) => k);
const arr = filter(isEven, data);
const arr2 = filter(isGreaterThanFive, data);

test('filter', t => {
  t.same(arr, [0, 2, 4, 6, 8]);
  t.same(arr2, [6, 7, 8, 9]);
});
