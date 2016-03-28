import test from 'ava';
import map from '../map';

const addOne = x => x + 1;
const timesFive = x => x * 5;
const data = Array.from({ length: 5 }, (v, k) => k);
const arr = map(addOne, data);
const arr2 = map(timesFive, data);

test('map', t => {
  t.same(arr, [1, 2, 3, 4, 5]);
  t.same(arr2, [0, 5, 10, 15, 20]);
});
