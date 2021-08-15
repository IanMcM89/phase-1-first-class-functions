function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function aNamedFunction () {
        console.log('I am a named function!');
    }
}

function returnsAnAnonymousFunction() {
    return function() {
      console.log('I am an anonymous function!');
    }
}