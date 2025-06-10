const findTheOldest = function(arr) {
    let new_arr = arr.map((obj) => ({
        name: obj.name,
        age: `${calculateAge(obj)}`
    }));

    return new_arr.sort((a, b) => a.age - b.age).at(-1);
};

let calculateAge = (obj) => {
    if (!('yearOfDeath' in obj)) obj.yearOfDeath = new Date().getFullYear();

    return obj.yearOfDeath - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
