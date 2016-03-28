import test from 'ava';
import reverse from '../reverse';

test('reverse', t => {
  t.same(reverse([1, 2, 3, 4]), [4, 3, 2 ,1]);
})
