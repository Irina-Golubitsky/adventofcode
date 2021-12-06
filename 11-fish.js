let myArray=[1,1,3,5,3,1,1,4,1,1,5,2,4,3,1,1,3,1,1,5,5,1,3,2,5,4,1,1,5,1,4,2,1,4,2,1,4,4,1,5,1,4,4,1,1,5,1,5,1,5,1,1,1,5,1,2,5,1,1,3,2,2,2,1,4,1,1,2,4,1,3,1,2,1,3,5,2,3,5,1,1,4,3,3,5,1,5,3,1,2,3,4,1,1,5,4,1,3,4,4,1,2,4,4,1,1,3,5,3,1,2,2,5,1,4,1,3,3,3,3,1,1,2,1,5,3,4,5,1,5,2,5,3,2,1,4,2,1,1,1,4,1,2,1,2,2,4,5,5,5,4,1,4,1,4,2,3,2,3,1,1,2,3,1,1,1,5,2,2,5,3,1,4,1,2,1,1,5,3,1,4,5,1,4,2,1,1,5,1,5,4,1,5,5,2,3,1,3,5,1,1,1,1,3,1,1,4,1,5,2,1,1,3,5,1,1,4,2,1,2,5,2,5,1,1,1,2,3,5,5,1,4,3,2,2,3,2,1,1,4,1,3,5,2,3,1,1,5,1,3,5,1,1,5,5,3,1,3,3,1,2,3,1,5,1,3,2,1,3,1,1,2,3,5,3,5,5,4,3,1,5,1,1,2,3,2,2,1,1,2,1,4,1,2,3,3,3,1,3,5];
const time=80;
let fishNumbers= Array(9).fill(0);
myArray.forEach(function(element){
    fishNumbers[element]++
})
console.log(fishNumbers);
for (let i=0;i<time;i++){
    let bufer=fishNumbers[0];
    for (let j=0;j<8;j++){
        fishNumbers[j]=fishNumbers[j+1]
    }
    fishNumbers[6]=fishNumbers[6]+bufer;
    fishNumbers[8]=bufer;
}
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(fishNumbers.reduce(reducer));