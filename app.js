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
  const html = people.map(function(person, price) {
    return `<div>${person.name} ${person.occupation} ${price * 30}</div>`;
  });
  container.innerHTML = html.join('');
}

let price = 30;
render(price);
setInterval(function(){
  console.log(price);
  const newPerson = randomPerson(price);
  people.push(newPerson);
  render(price);
}, 1000);

/*function(person){
  console.log(`<div class='${person.name} ${person.occupation}'></div>`);
  return `<div class='${person.name} ${person.occupation}'></div>`;
}*/