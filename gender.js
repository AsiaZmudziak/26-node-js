const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Joaquin', 'Jack', 'Clint', 'Christoph'];
const femaleNames = ['Maggie', 'Helena', 'Jessica', 'Gillian'];
const lastNames = ['Phoenix', ' Nicholson', 'Eastwood', 'Waltz', 'Smith', 'Bonham Carter'];

const randChoice = arr => {  
  console.log(arr);
  return arr[Math.floor(arr.length * Math.random())];
};

const people = [];

for (let i = 0; i < 20; i++) { 
  const gender = randChoice(genders);
  let age = Math.floor((Math.random() * 100) + 1);

  if(gender === "male"){
    maleName = randChoice(maleNames);
    lastName = randChoice(lastNames);
    people.push({ name:maleName, surname:lastName, gender, age });
  } 
    else {
    femaleName = randChoice(femaleNames);
    lastName = randChoice(lastNames);
    people.push({ name:femaleName, surmane:lastName, gender, age });
  }
} 

console.log(people);

const jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});