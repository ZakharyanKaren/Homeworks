// Write a function which parses string integers. If it's not possible to
// parse, then add null

function parseInteger(args) {
  return args.map((e) => (parseInt(e, 10) ? parseInt(e, 10) : null));
}
console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];
