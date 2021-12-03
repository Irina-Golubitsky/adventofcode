
let scan = `000011000110
100110100101
..
110100110111`

function mostCommon(array, index) {
    sum = 0;

    array.forEach(function (element) {

        sum = sum + parseInt(element.charAt(index));
    })
    if ((array.length / sum) < 2) return 1
    else if ((array.length / sum) > 2) return 0
    else return "equal"
}
function deleteItems(array, val, i) {
    for (j = array.length - 1; j >= 0; j -= 1) {
        if (array[j].charAt(i) === val) { array.splice(j, 1); }
    }
}

let myArray = scan.split(/\n/g);
let myArray2 = scan.split(/\n/g);
let oxigen = null, carbon = null; i = 0;
const elLength = myArray[0].length;
while ((i < elLength) && (!oxigen)) {
    let mostvalue = mostCommon(myArray, i);
    if ((mostvalue === 1) || (mostvalue === "equal")) {
        deleteItems(myArray, '0', i);
    } else {
        deleteItems(myArray, '1', i);
    }
    if (myArray.length === 1) { oxigen = myArray[0] }
    i++;
}
i = 0;
while ((i < elLength) && (!carbon)) {
    let mostvalue = mostCommon(myArray2, i);
    if ((mostvalue === 1) || (mostvalue === "equal")) {
        deleteItems(myArray2, '1', i);
    } else {
        deleteItems(myArray2, '0', i);
    }
    if (myArray2.length === 1) { carbon = myArray2[0] }
    i++;
}
console.log(parseInt(oxigen, 2) * parseInt(carbon, 2));
