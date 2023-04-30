const findTheOldest = (people) => 
    people.reduce((oldest, person) => {
            const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
            const personAge = getAge(person.yearOfBirth, person.yearOfDeath);  
            return oldestAge < personAge ? person : oldest;
        });

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
/**
 * finds the oldest person
 * 
 * finds the oldest person if someone is still living
 * 
 * finds the oldes person if the OLDEST is still living
 * 
 */

// Do not edit below this line
module.exports = findTheOldest;
