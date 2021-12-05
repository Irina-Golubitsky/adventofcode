let scan=`941,230 -> 322,849
762,196 -> 701,257
..
698,858 -> 389,858`
let myArray = scan.split(/\n| -> |,/).map(Number);
let dotsArr = Array(1000).fill(0).map(() => Array(1000).fill(0));

for (i=0; i<=myArray.length-4; i=i+4){
    if (Math.abs(myArray[i]-myArray[i+2])===Math.abs(myArray[i+1]-myArray[i+3])) {
        let k=0; l=0;
        for (j=0; j<=(Math.abs(myArray[i+1]-myArray[i+3]));j++){
            if ((myArray[i]-myArray[i+2])>0) { k=(-1)*j} else {k=j}
            if ((myArray[i+1]-myArray[i+3])>0) {l=(-1)*j} else {l=j}
            dotsArr[myArray[i]+k][myArray[i+1]+l]=dotsArr[myArray[i]+k][myArray[i+1]+l]+1;
        }
    }
    if (myArray[i]===myArray[i+2]){
        let minY=Math.min(myArray[i+1],myArray[i+3]);
        for (j=0; j<=(Math.abs(myArray[i+1]-myArray[i+3]));j++){
            dotsArr[myArray[i]][minY+j]=dotsArr[myArray[i]][minY+j]+1;
        }
    } else if (myArray[i+1]===myArray[i+3]){
        let minX=Math.min(myArray[i],myArray[i+2]);
        for (j=0; j<=(Math.abs(myArray[i]-myArray[i+2]));j++){
            dotsArr[minX+j][myArray[i+1]]=dotsArr[minX+j][myArray[i+1]]+1;
        }
    }
}
let counter=0;
for (i=0;i<1000;i++){
    for (j=0;j<1000;j++){
        if (dotsArr[i][j]>1){counter++; }
    }
}
console.log(counter);

