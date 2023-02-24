const findTheOldest = function(people) {

  let indexOldest = 0;
  let age = 0;
  let date = new Date().getFullYear();

  for (let i = 0; i < people.length - 1; i++) {
    if (typeof(people[i].yearOfDeath) == 'undefined') {
      if ((date - people[i].yearOfBirth) > age) {
        age = date - people[i].yearOfBirth;
        indexOldest = i;
      }
    }else {
      if ((people[i].yearOfDeath - people[i].yearOfBirth) > age) {
        age = people[i].yearOfDeath - people[i].yearOfBirth;
        indexOldest = i;
      }
    }
  }

  return people[indexOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
