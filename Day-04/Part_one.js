const testData = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

var uniquePassport = input.split("\n\n");
var countValid = 0;

function parseFields (str) {
    const parts = str.split(/\s/);
    const obj = {};
    for (let element of parts){
        const [key, value ] = element.split(':');
        obj[key] = value;
    }
    return obj;
}

const rows = uniquePassport.map(parseFields);
console.table(rows);

const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'];

for (let row of rows){
    var isValid = requiredFields.every(field => field in row)
    if (isValid){
        ++countValid;
    }
    }
    console.log(countValid);
