const select = document.querySelector(".our-select");
const imgDiv = document.querySelector(".img-div");

select.addEventListener("change", (event) => {
  let breed = event.target.value;
  breed = breed.replace(/-/g, "/");

  let prom = fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  prom
    .then((response) => response.json())
    .then((result) => {
      imgDiv.textContent = "";
      let img = document.createElement("img");
      img.src = result.message;
      imgDiv.append(img);
    });
});
