import test from 'ava';
import compose from '../compose';

const addOne = x => x + 1;
const addTwo = x => x + 2;
const timesThree = x => x * 3;

test('compose', t => {
  t.plan(3);
  let fn = compose(addOne, addTwo, timesThree);
  t.is(fn(10), 33, 'It should compose args from right to left');
  t.is(fn(3), 12, 'It should compose args from right to left');
  t.not(fn(3), 'It should compose args from right to left');
});
