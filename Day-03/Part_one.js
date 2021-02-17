const tree = '#'
const rows = input
    .split('\n');


let width = rows[0].length;

let collisions = 0;
let x = 0;

for (i = 0; i < rows.length; i++){
    if (rows[i][x%width] === tree) {
        collisions++;
    }
    x += 3;
}

console.log(collisions);
