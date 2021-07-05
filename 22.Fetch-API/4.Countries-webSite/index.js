const wrapper = document.querySelector(".wrapper");
const input = document.querySelector(".country-input");
const container = document.querySelector(".container");

let countryName = [],
  countryFlag = [];

input.addEventListener("keyup", (event) => {
  if (event.target.value === "") {
    allCountries();
  } else {
    searchCountries();
  }
});

function allCountries() {
  let prom = fetch("https://restcountries.eu/rest/v2/all");
  prom
    .then((response) => response.json())
    .then((result) => {
      result.forEach((country) => {
        let countryDiv = document.createElement("a");
        let countryFlag = document.createElement("img");
        let countryName = document.createElement("p");

        countryDiv.classList.add("country-div");
        countryFlag.classList.add("country-flag");
        countryName.classList.add("country-name");

        countryDiv.href = `https://en.wikipedia.org/wiki/${country.name}`;
        countryFlag.src = country.flag;
        countryName.innerText = country.name;

        countryDiv.append(countryFlag);
        countryDiv.append(countryName);
        container.append(countryDiv);
      });

      countryName = result.map((country) => country.name);
    });
}

function searchCountries() {
  container.innerText = "";
  let prom = fetch(`https://restcountries.eu/rest/v2/name/${input.value}`);
  prom
    .then((response) => response.json())
    .then((result) => {
      result.forEach((country) => {
        let countryDiv = document.createElement("a");
        let countryFlag = document.createElement("img");
        let countryName = document.createElement("p");

        countryDiv.classList.add("country-div");
        countryFlag.classList.add("country-flag");
        countryName.classList.add("country-name");

        countryDiv.href = `https://en.wikipedia.org/wiki/${country.name}`;
        countryFlag.src = country.flag;
        countryName.innerText = country.name;

        countryDiv.append(countryFlag);
        countryDiv.append(countryName);
        container.append(countryDiv);
      });

      countryName = result.map((country) => country.name);
    })
    .catch((err) => {
      container.innerText = "There is no such country";
    });
}

allCountries();
