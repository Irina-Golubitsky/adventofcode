let myset=[17,25,31,22,79,72,58,47,62,50,30,91,11,63,66,83,33,75,44,18,56,81,32,46,93,13,41,65,14,95,19,38,8,35,52,7,12,70,84,23,4,42,90,60,6,40,97,16,27,86,5,48,54,64,29,67,26,89,99,53,34,0,57,3,92,37,59,9,21,78,51,80,73,82,76,28,88,96,45,69,98,1,2,71,68,49,36,15,55,39,87,77,74,94,61,85,10,43,20,24]
let scan=`36 11 70 77 80
63  3 56 75 28
..
 3 48 72  7 96`


 let myArray=scan.split(/\n/g).filter(function (el) {
    return el != '';
  });
  let  sum=0;
  let array=[];
  let winSet=[];
  let uniqueIndex=[];
  for (i=0; i<=(myArray.length-5); i=i+5){
      let tabArray=[];
      for (j=0;j<5;j++){
        let str=myArray[i+j].split(" ").filter(function (el) {
            return el != '';
          }); 

        tabArray.push(str.map(Number));
      }
      array.push(tabArray)
  }
let iset=0;
while  (iset<myset.length){
      playSet=myset.slice(iset,iset+1);
      array.forEach(function (element) {
          for (i = 0; i < 5; i++) {
              for (j = 0; j < 5; j++) {
                  let found = playSet.find(el => el === element[i][j]);
                  if (found >= 0) { element[i][j] = 100;  }
              }
          }
      })
      array.forEach(function (element, index) {
        for (i = 0; i < 5; i++) {
            let col=0;
             let raw=0;
            for (j = 0; j < 5; j++) {
                raw=raw+element[i][j];
                col=col+element[j][i];
            }
            if ((col===500)||(raw===500)) {
                for (i = 0; i < 5; i++) {
                    for (j = 0; j < 5; j++) {
                        if (element[i][j]<100){sum=sum +element[i][j]}
                    }
                }
                let foundTable = uniqueIndex.find(el => el === index);
                  if (foundTable === undefined) { uniqueIndex.push(index);
                winSet.push([sum,playSet[0]]);}

                sum=0;}
        }
    })
    iset=iset+1;
    }  
    console.log(winSet[winSet.length-1][0] *winSet[winSet.length-1][1])
    

