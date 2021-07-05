const title = document.createElement("p");
const description = document.createElement("p");
const director = document.createElement("p");
const producer = document.createElement("p");
const releaseDate = document.createElement("p");

const titleDiv = document.querySelector(".title");
const descriptionDiv = document.querySelector(".description");
const directorDiv = document.querySelector(".director");
const producerDiv = document.querySelector(".producer");
const releaseDateDiv = document.querySelector(".release-date");

let prom = fetch(
  `https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`
);
prom
  .then((response) => response.json())
  .then((result) => {
    title.innerText = result.title;
    description.innerText = result.description;
    director.innerText = result.director;
    producer.innerText = result.producer;
    releaseDate.innerText = result.release_date;

    title.style.width = "75%";
    description.style.width = "75%";
    director.style.width = "75%";
    producer.style.width = "75%";
    releaseDate.style.width = "75%";

    titleDiv.append(title);
    descriptionDiv.append(description);
    directorDiv.append(director);
    producerDiv.append(producer);
    releaseDateDiv.append(releaseDate);
  });
