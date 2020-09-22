const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.innerText = "Blue";
const someButton = document.querySelector("button.change");
someButton.addEventListener("click", () => {
  h1.style.color = "purple";
  h1.innerText = "Some text";
});

const example = function () {
  another();
  return ul;
};

const handleLiClick = (e) => {
  console.log(e.target);
  if (e.target.nodeName == "LI") {
    e.target.style.color = "green";
    e.target.style.backgroundColor = "yellow";
  }
};

const ul = document.querySelector("ul.names");
const names = ["Morgan", "Mariam", "Chyrelle"];

function displayNames(names) {
  ul.innerHTML = "";
  names.forEach((name) => {
    ul.innerHTML += `<li>${name}</li>`;
  });
}
displayNames(names);

ul.addEventListener("click", handleLiClick);

example();

function another() {
  function nested() {
    console.log("nested function");
  }

  nested();

  console.log("another was called");
}

let handleForm = (e) => {
  e.preventDefault();
  if (e.target.name.value != "") {
    names.push(e.target.name.value);
    li = document.createElement("li");
    li.innerText = e.target.name.value;
    ul.appendChild(li);
    e.target.reset();
  }
};

let form = document.querySelector("form");
form.addEventListener("submit", handleForm);
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //e.target.query.value
  const searchedNames = names.filter((name) => {
    return name.toLowerCase().includes(e.target.query.value.toLowerCase());
  });
  console.log(searchedNames);
  displayNames(searchedNames);
  // clear names and render the correct names
});

function multiplier(number1, number2) {
  return number1 * number2;
}
multiplier(10, 5);

function arithmaticDoer(number1, number2, arithmaticFn) {
  return arithmaticFn(number1, number2);
}

arithmaticDoer(10, 5, multiplier);

function add(num1, num2) {
  return num1 + num2;
}

arithmaticDoer(10, 5, add);

arithmaticDoer(3, 7, function (num1, num2) {
  return num1 / num2;
});

let x = 25;

function times5(num) {
  x = x + 50;
  num * 5;
  return "Hello My Name is Morgan";
}

[1, 2, 3, 4].map(times5); // returns [5,10,15,20]

const arrowFunction = (a, b) => {
  return a * b;
};

arrowFunction(20, 2);

console.log("appears before set timeout");

setTimeout(() => {
  console.log("waited 2 seconds");
}, 2000);

console.log("appears after set timeout");

document.body.innerHTML += `
<div class="pokemon">
</div>
<button onclick="fetchPokemon()">Fetch New Pokemon</button>
`;

const pDiv = document.querySelector("div.pokemon");
function fetchPokemon() {
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1050) + 1}`
  )
    .then((response) => response.json())
    .then((pokemon) => {
      // have access to data
      pDiv.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.other["official-artwork"].front_default}" />
    <p>hp: ${pokemon.stats[0].base_stat}</p>
    `;
    });
  // do not have access to data
}
fetchPokemon();
