let Pagination = {
  _currentPage: 0,
  _newArr: [],
  _pageSize: null,
  _array: [],

  init(array, pageSize) {
    Pagination._pageSize = pageSize;
    Pagination._currentPage = 1;
    Pagination._newArr = [];
    Pagination._array = array;
    for (let i = Pagination._currentPage - 1; i < Pagination._pageSize; i++) {
      Pagination._newArr.push(Pagination._array[i]);
    }
  },
  nextPage() {
    Pagination._currentPage++;
    let pageItems = (Pagination._currentPage - 1) * Pagination._pageSize;
    Pagination._newArr = [];

    for (let i = pageItems; i < pageItems + Pagination._pageSize; i++) {
      Pagination._newArr.push(Pagination._array[i]);
    }
    return Pagination;
  },
  prevPage() {
    Pagination._currentPage--;
    let pageItems = (Pagination._currentPage - 1) * Pagination._pageSize;
    Pagination._newArr = [];

    for (let i = pageItems; i < pageItems + Pagination._pageSize; i++) {
      Pagination._newArr.push(Pagination._array[i]);
    }
  },
  firstPage() {
    Pagination._currentPage = 1;
    Pagination._newArr = [];
    for (
      let i = Pagination._currentPage - 1;
      i < Pagination._currentPage - 1 + Pagination._pageSize;
      i++
    ) {
      Pagination._newArr.push(Pagination._array[i]);
    }
  },
  lastPage() {
    Pagination._currentPage = Math.ceil(
      (Pagination._array.length - 1) / Pagination._pageSize
    );
    Pagination._newArr = [];
    for (
      let i = Pagination._array.length - Pagination._pageSize;
      i < Pagination._array.length;
      i++
    ) {
      Pagination._newArr.push(Pagination._array[i]);
    }
  },
  goToPage(num) {
    Pagination._currentPage = num;
    let pageItems = (Pagination._currentPage - 1) * Pagination._pageSize;
    Pagination._newArr = [];
    for (let i = pageItems; i < pageItems + Pagination._pageSize; i++) {
      Pagination._newArr.push(Pagination._array[i]);
    }
  },
  getPageItems() {
    return Pagination._newArr;
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems());
// ["a", "b", "c", "d"]
Pagination.nextPage().nextPage();
// add the current page by one
console.log(Pagination.getPageItems());
// ["e", "f", "g", "h"]
// console.log(Pagination.nextPage()); //.nextPage();
// the ability to call chainable
Pagination.goToPage(3);
// current page must be set to 3);
console.log(Pagination.getPageItems());

Pagination.lastPage();
console.log(Pagination.getPageItems());
