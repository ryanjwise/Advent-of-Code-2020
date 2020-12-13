console.log("\n\n---------\nNew File\n---------\n\n");

var uniquePassport = input.split("\n\n");
var validPassports = [];
var countValid = 0;

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const rows = uniquePassport.map(parseFields);
console.table(rows);
for (let row of rows) {
  var isValid = requiredFields.every((field) => field in row);
  if (isValid) {
    ++countValid;
    validPassports.push(row);
  }
}
console.log("Number of passports with all fields: ", countValid);

