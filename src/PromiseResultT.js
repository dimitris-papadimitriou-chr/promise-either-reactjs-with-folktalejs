
export var PromiseResultT = (promiseResult) => ({
  map: (f) =>
    PromiseResultT(promiseResult.then(result => result.map(f))),
  matchWith: (pattern) =>
    PromiseResultT(promiseResult.then(result => result.matchWith(pattern))),
  //this returns the internal PromiseResult
  toPromise: () => promiseResult
});
