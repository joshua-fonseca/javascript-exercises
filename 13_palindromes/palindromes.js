const palindromes = function (sen) {
    let clean = sen
        .split('')
        .map(x => x.toLowerCase())
        .filter(x => (
            x !== ' ' &&
            ((x.toUpperCase() != x.toLowerCase()) || !isNaN(x)))
        );

    return clean.join('') === clean.toReversed().join('') ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
