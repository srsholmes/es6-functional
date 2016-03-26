import test from 'ava';
import curry from '../curry'

const add = curry((a, b) => a + b)
const addThenMultiply = curry((a, b, c) => (a + b) * c);

test('curry', t => {
  t.is(add(1)(2), add(1, 2))
  t.is(addThenMultiply(1, 2, 3), 9)
});
