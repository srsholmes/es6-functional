import curry from './curry';
const concat = curry((b, a) => a.concat(b))
export default concat;
