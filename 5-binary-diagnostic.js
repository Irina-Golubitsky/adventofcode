let scan = `000011000110
100110100101
..
110100110111`

let myArray = scan.split(/\n/g);
let epsilon = "", gamma = "";
const elLength = myArray[0].length;
const sumArray = Array(elLength).fill(0);
myArray.forEach(function (element) {
    for (i = 0; i < elLength; i++) {
        sumArray[i] = sumArray[i] + parseInt(element.charAt(i));
    }
})
for (i = 0; i < elLength; i++) {
    if (sumArray[i] > 500) {
        gamma = gamma + '1';
        epsilon = epsilon + '0';
    } else {
        gamma = gamma + '0';
        epsilon = epsilon + '1';
    }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));