const input = document.querySelector(".search-book-input");
const button = document.querySelector(".search-book-btn");
const resultDiv = document.querySelector(".result");
const pagination = document.querySelector(".pagination");
const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pageNumber = document.querySelector(".page-number");

let currentPage = 1;
let totalPages = 0;
pagination.style.display = "none";

function showBooks() {
  previousBtn.disabled = true;
  nextBtn.disabled = true;
  resultDiv.innerText = "";
  let bookName = input.value;
  bookName = bookName.replace(/\s/g, "+");
  let prom = fetch(
    `http://openlibrary.org/search.json?q=${bookName}&page=${currentPage}`
  );
  prom
    .then((response) => response.json())
    .then((result) => {
      const hr = document.createElement("hr");

      const p1 = document.createElement("p");
      p1.innerText = `Total count - ${result.numFound}`;
      resultDiv.append(p1);
      resultDiv.append(hr);

      totalPages = Math.ceil(result.numFound / 100);

      result.docs.forEach((el) => {
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const p5 = document.createElement("p");
        const hr = document.createElement("hr");

        p2.innerText = `Title - ${el.title ? el.title : `Have not title`}`;
        p3.innerText = `Author name - ${
          el.author_name ? el.author_name[0] : `Have not author name`
        }`;
        p4.innerText = `First publish year - ${
          el.first_publish_year
            ? el.first_publish_year
            : `Have not first publish year`
        }`;
        p5.innerText = `Subject - `;

        if (el.subject) {
          for (let i = 0; i < 5; i++) {
            const element = el.subject[i];
            p5.innerText += `${element}, `;
          }
          p5.innerText = p5.innerText.slice(0, -2);
        } else {
          p5.innerText += "Have not subject";
        }

        resultDiv.append(p2);
        resultDiv.append(p3);
        resultDiv.append(p4);
        resultDiv.append(p5);
        resultDiv.append(hr);
      });
    })
    .then(() => {
      pageNumber.innerText = `${currentPage}/${totalPages}`;
      pagination.style.display = "block";
      input.innerText = "";

      if (currentPage === 1) {
        nextBtn.disabled = false;
      } else if (currentPage === totalPages) {
        previousBtn.disabled = false;
      } else {
        nextBtn.disabled = false;
        previousBtn.disabled = false;
      }
    });
}

if (currentPage === 1) {
  previousBtn.disabled = true;
}

if (currentPage === totalPages) {
  nextBtn.disabled = true;
}

previousBtn.addEventListener("click", () => {
  currentPage = currentPage - 1;

  if (currentPage === 1) {
    previousBtn.disabled = true;
  }
  nextBtn.disabled = false;
  pageNumber.innerText = `${currentPage}/${totalPages}`;
  showBooks();
});

nextBtn.addEventListener("click", () => {
  currentPage = currentPage + 1;

  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  }

  previousBtn.disabled = false;
  pageNumber.innerText = `${currentPage}/${totalPages}`;
  showBooks();
});

button.addEventListener("click", showBooks);
