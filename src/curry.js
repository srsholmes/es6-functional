export function curry(fn, ...args) {
  let c = (args) =>
    args.length < fn.length
      ? (..._args) => c([...args, ..._args])
      : fn(...args);
  return c(args);
};

export default curry;
