import curry from './curry';
const map = curry((fn, x) => x.map(i => fn(i)));
export default map;
