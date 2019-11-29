console.log('[utils.js] Run!');

const name = "Mike";

const add = function (a, b) {
    return a + b;
}

// Return value. When imported by "require(...)" then it is a value that it's assigned to the variable
module.exports = add;
