function fn(x: string) {
  return parseInt(x);
}

const n1 = fn.call(undefined, "10");

const n2 = fn.call(undefined, false);

const n3 = fn.apply(undefined, [1]);

const n4 = fn.bind(undefined, 1);
