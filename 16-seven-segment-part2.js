let scan = `cdeba gadec dafcgb bedg bd cdb cdebga fadecg adcfbeg bacfe | aedgbcf gcfead dbacfeg gecabd
ef fbceag dfbe cef cdbae gfadc cabfged debcga aecdf cebfad | abgefcd cef bdfgace dbfe
..
cebfa aebcfg cgbfa egbf ceb cbgfeda ebcadg bfagdc eacfd be | ebfgac ebc bagecf gfeb`
let myArray = scan.split(/\n| | /).filter((x => x !== "|"));
myArray.forEach(function (element, index) {
    myArray[index] = element.split('').sort().join('');
})
let numbers = Array(10).fill('x');
let four = ""; one = ""; six = "";
let sum=0;
function IncludesAll(word, set) {
    let includes = true;
 
    for (j = 0; j < set.length; j++) {
        if (!word.includes(set.charAt(j))) {includes=false}
    }
    return includes;
}
let index=0;
while (index<myArray.length){
   let tenArray=[];
for (i = 0; i < 10; i++) {
    tenArray.push(myArray[index+i]);
}
for (i = 0; i < 10; i++) {
    switch (tenArray[i].length) {
        case 2: { numbers[i] = 1; one = tenArray[i]; break }
        case 3: { numbers[i] = 7; break }
        case 7: { numbers[i] = 8; break }
        case 4: { numbers[i] = 4; four = tenArray[i]; break }
    }
}
for (i = 0; i < 10; i++)  {
    if (tenArray[i].length === 6) {
        if (IncludesAll(tenArray[i], four)) { numbers[i] = 9; }
        else if (IncludesAll(tenArray[i], one)) { numbers[i] = 0; }
     else { numbers[i] = 6; six=tenArray[i] }
    }
}
for (i = 0; i < 10; i++)  {
    if (tenArray[i].length === 5) {
        if (IncludesAll(tenArray[i], one)) { numbers[i] = 3; }
        else if (IncludesAll(six, tenArray[i])) { numbers[i] = 5; } else { numbers[i] = 2 }
    }
}
let value=""
for (i=0; i<4;i++){
   value=value+ numbers[tenArray.indexOf(myArray[index+10+i])].toString();
}
sum=sum+parseInt(value)
index=index+14;
}

console.log(sum);



