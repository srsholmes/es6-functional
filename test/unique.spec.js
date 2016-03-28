import test from 'ava';
import unique from '../unique';

test('unique', t => {
  t.same(unique([1, 1, 1, 2, 3, 3, 4]), [1 , 2, 3, 4]);
  t.not(unique([1, 1, 1, 2, 3, 3, 4]), [1, 1, 2, 3, 4]);
});
