function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction() {
  const namedFunction = function () {
    console.log("returnsANamedFunction!");
  };
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("returnsAnAnonymousFunction!");
  };
}
