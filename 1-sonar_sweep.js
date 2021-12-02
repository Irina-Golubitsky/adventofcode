let scan= `188
192
193
..
10415`

let myArray = scan.split(/\n/g).map(Number);
let previous=188; // first element
let i=0;
myArray.forEach(function(element) {
if (element>previous){i++}
previous=element;
})
console.log(i);


