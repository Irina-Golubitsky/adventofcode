let scan=`cdeba gadec dafcgb bedg bd cdb cdebga fadecg adcfbeg bacfe | aedgbcf gcfead dbacfeg gecabd
ef fbceag dfbe cef cdbae gfadc cabfged debcga aecdf cebfad | abgefcd cef bdfgace dbfe
..
cebfa aebcfg cgbfa egbf ceb cbgfeda ebcadg bfagdc eacfd be | ebfgac ebc bagecf gfeb`
let myArray = scan.split(/\n| | /).filter((x => x !== "|"));
let sum=0;i=10;

while (i<myArray.length){
    for (j=0;j<4;j++){
        if ((myArray[i+j].length===2)||(myArray[i+j].length===4)||(myArray[i+j].length===3)||(myArray[i+j].length===7)){
            sum++;
    }
        }
        i=i+14;
    }
console.log(sum);


