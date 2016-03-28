import curry from './curry';
const includes = curry((x, arr) => arr.indexOf(x) !== -1);
export default includes;
