import test from 'ava';
import toUpperCase from '../toUpperCase';
test('toUpperCase', t => {
  t.same(toUpperCase('test'), 'TEST');
  t.not(toUpperCase('test'), 'Test');
  t.not(toUpperCase('test'), 'test');
});
