// v1
// const removeFromArray = function(array, x) {
//     array.splice(array.indexOf(x), 1)
//     return array;
// };

const removeFromArray = function(array, ...args) {
    argsArray = Array.from(args);
    // const result = array.filter((x) => !argsArray.includes(x));
    // return result;
    return array.filter((x) => !argsArray.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
