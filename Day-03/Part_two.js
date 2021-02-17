console.log("\n------\nStarting Part 2\n------\n\n")

//const tree = '#'
// const rows = input
//     .split('\n');
//let width = rows[0].length;

function run(right, down){
    collisions = 0;
    x = 0;
    
    for (i = 0; i < rows.length; i += down){
        console.log("test");
        if (rows[i][x%width] === tree) {
            collisions++;
        }
        x += right;
}
return collisions;
}

var r = 0;
var d = 0;

r = 1;
d = 1;
var collisionsR1D1 = run(r, d);
console.log("R1D1 has " + collisionsR1D1 + " collisions")

r = 3;
var collisionsR3D1 = run(r, d);
console.log("R3D1 has " + collisionsR3D1 + " collisions")

r = 5;
var collisionsR5D1 = run(r, d);
console.log("R5D1 has " + collisionsR5D1 + " collisions")

r = 7;
var collisionsR7D1 = run(r, d);
console.log("R7D1 has " + collisionsR7D1 + " collisions")

r = 1;
d = 2;
var collisionsR1D2 = run(r, d);
console.log("R1D1 has " + collisionsR1D2 + " collisions")

collisions = collisionsR1D1 * collisionsR3D1 * collisionsR5D1 * collisionsR7D1 * collisionsR1D2;
console.log("The total number of collisionsm multiplies is: " + collisions);