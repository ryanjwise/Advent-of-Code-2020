// @ts-check

//Parse a string array and return its fields as objects.
function parseFields(str) {
  const parts = str.split(/\s/);
  const obj = {};
  for (let element of parts) {
    const [key, value] = element.split(":");
    obj[key] = value;
  }
  return obj;
}

function dateValidation(date, minYear, maxYear) {
  var isValid = true;
  if (date.length != 4) {
    isValid = false;
  }
  if (isValid) {
    isValid = validateDateRange(Number(date), minYear, maxYear);
  }
  return isValid;
}

function validateDateRange(date, minYear, maxYear) {
  var isValid = true;

  if (date < minYear || date > maxYear) {
    isValid = false;
  }
  return isValid;
}

function validateHGT(hgt, unit) {
  var isValid = true;
  switch (unit) {
    case "cm":
      if (hgt < 150 || hgt > 193) {
        isValid = false;
      }
      break;
    case "in":
      if (hgt < 59 || hgt > 76) {
        isValid = false;
      }
      break;
    default:
      isValid = false;
  }
  return isValid;
}
