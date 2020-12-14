// @ts-check

//var initialisation
var uniquePassport = input.split("\n\n");
var validPassports = [];
var allRequiredFields = 0;
const requiredFields = [
  "byr", //[0]
  "iyr", //[1]
  "eyr", //[2]
  "hgt", //[3]
  "hcl", //[4]
  "ecl", //[5]
  "pid",
]; //[6]
var countValid = 0;

//parse unique Passports fields into a table array
const rows = uniquePassport.map(parseFields);
console.table(rows);
//check for requisite fields (no 'cid') and push matching passports into new array.
for (let row of rows) {
  var isValid = requiredFields.every((field) => field in row);
  if (isValid) {
    ++allRequiredFields;
    validPassports.push(row);
  }
}

console.log("Number of passports with all fields: ", allRequiredFields);

console.table(validPassports);
//perform checks on data
for (let row of validPassports) {
  var isValid = true;
  //Validate BYR
  if (isValid) {
    isValid = dateValidation(row.byr, 1920, 2002);
  }
  //Validate IYR
  if (isValid) {
    isValid = dateValidation(row.iyr, 2010, 2020);
  }
  //Validate EYR
  if (isValid) {
    isValid = dateValidation(row.eyr, 2020, 2030);
  }
  //Validate HGT
  if (isValid) {
    var unit = row.hgt.substring(row.hgt.length - 2, row.hgt.length);
    var hgt = Number(row.hgt.substring(0, row.hgt.length - 2));
    isValid = validateHGT(hgt, unit);
  }
  //Validate HCL
  if (isValid) {
    if (row.hcl.substring(0,1) == '#' && (row.hcl.substring(1).length == 6)){
      if (row.hcl.match(/^#([0-9a-f]{6})$/) === null){
        isValid = false;
      }
    } else isValid = false;
  }
  //Validate ECL
  if (isValid) {
    if(row.ecl.split(" ").length = 1){
      if (!row.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)){
        isValid = false;
      }
    } else isValid = false;
  }

  //Validate PID
  if (isValid) {
    if (row.pid.length = 9){
      isValid = !isNaN(row.pid);
    } else isValid = false;
  }

  //Count results that validate on all tests.
  if (isValid) {
    countValid++;
  }
}
console.log(countValid);
