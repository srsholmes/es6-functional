import test from 'ava';
import includes from '../includes';

const fn = () => includes([1, 2, 3, 4]);

test('includes', t => {
  t.ok(fn(1));
  t.not(fn(5));
});
