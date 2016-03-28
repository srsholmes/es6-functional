import curry from './curry';
const filter = curry((fn, x) => x.filter(i => fn(i)));
export default filter;
