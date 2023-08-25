const container = document.querySelector('.container');
const names = ['Alice', 'Bob', 'Carol'];
const occupations = ['Writer', 'Teacher', 'Programmer'];

function randomPerson(prices){
  const nameIdx = Math.floor(Math.random()*names.length);
  const occupationIdx = Math.floor(Math.random()*occupations.length);
  const info = {
    name: names[nameIdx],
    occupation: occupations[occupationIdx],
    price: prices
  };
  return info;
}

const people = [];

function render(price){
  const html = people.map(function(person) {
   return `<div><h3>${person.name} ${person.occupation} ${price}</h3></div>`;
  });
  container.innerHTML = html.join('');
}

let price = 30;
setInterval(function(){
  const newPerson = randomPerson(price);
  people.push(newPerson);
  render(price);
  price += 30;
}, 1000);