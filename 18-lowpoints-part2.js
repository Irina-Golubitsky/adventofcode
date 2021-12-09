let scan = `2165679878998998656789210124569321954398786566799434678987678943987789543249654323496545436767898789
1034598769987897545678921235698949895987676445978926799876567899876678992198966212987432325456789678
..
8767898989992349543498756322349878569895498765642355678998943456789239878998765678999547999896799653`


let myArray = scan.split(/\n/g);
let raw = myArray.length;
let pointsArray = [];
let sum = 0; let basin = 0;
let col = myArray[0].length;
let basins = [];
function basinSize(i, j) {
    if ((i > 0) && (i <= raw) && (j > 0) && (j <= col) && (pointsArray[i][j] != 9) && (inBasin[i][j] === 0)) {
        basin++; inBasin[i][j] = 1;
        if (pointsArray[i][j] < pointsArray[i - 1][j]) { basinSize(i - 1, j); }
        if (pointsArray[i][j] < pointsArray[i][j - 1]) { basinSize(i, j - 1); }
        if (pointsArray[i][j] < pointsArray[i + 1][j]) { basinSize(i + 1, j); }
        if (pointsArray[i][j] < pointsArray[i][j + 1]) { basinSize(i, j + 1); }
    }
    return basin;
}
for (i = 0; i < raw; i++) {
    pointsArray[i] = myArray[i].split('').map(Number);
}

for (i = 0; i < raw; i++) {
    pointsArray[i].unshift(10);
    pointsArray[i].push(10);
}
let inBasin = Array(raw + 2).fill(0).map(() => Array(col + 2).fill(0));
pointsArray.unshift(Array(col + 2).fill(10));
pointsArray.push(Array(col + 2).fill(10));
for (i = 1; i <= raw; i++) {
    for (j = 1; j <= col; j++) {
        let law = ((pointsArray[i][j] < pointsArray[i - 1][j]) && (pointsArray[i][j] < pointsArray[i][j - 1]) && (pointsArray[i][j] < pointsArray[i + 1][j]) && (pointsArray[i][j] < pointsArray[i][j + 1]));
        if (law) {
            basin = 0;
            let newbasin = basinSize(i, j);
            basins.push(newbasin)
        }
    }
}
basins.sort(function (a, b) {
    return b - a;
});

console.log(basins[0] * basins[1] * basins[2]);

