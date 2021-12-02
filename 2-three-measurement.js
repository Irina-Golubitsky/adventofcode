let scan= `188
192
193
..
10415`

let myArray = scan.split(/\n/g).map(Number);
let arraySum=[];
for (let i=0;i<(myArray.length-2);i++){
    arraySum.push(myArray[i]+myArray[i+1]+myArray[i+2])
}
let previous=arraySum[0]; // first element
 i=0;
arraySum.forEach(function(element) {  
if (element>previous){i++}
previous=element;
})
console.log(i);
