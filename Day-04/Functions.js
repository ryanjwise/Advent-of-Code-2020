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

