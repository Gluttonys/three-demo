

type numberPromise = Promise<number>;
type n = numberPromise extends Promise<infer P> ? P : never; // number

const a: n = 34
