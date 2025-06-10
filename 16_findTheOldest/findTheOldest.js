const findTheOldest = function(arr) {
  return arr.reduce((highest, curr) => 
    calculateAge(curr) > calculateAge(highest) ? curr : highest
  );
};

let calculateAge = (obj) => {
   return !('yearOfDeath' in obj) ?
    new Date().getFullYear() - obj.yearOfBirth : 
    obj.yearOfDeath - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
