let scan =`([<([{{<<(<<{[<><>)}<([][])<<>{}>>>{[{(){}}(()[])]<{()()}<()()>>}>([<<{}<>>(<><>)><[{}[]](<>())>][
    ({{<<(<<<<{{[({}{})<[]()>]<([]{}){[]<>}>}{([{}[]]}}}>({(((()()))<{<>()}[<>()]>)[{(<>{})(()[])}[{[]
    ..
    {<{<{[([(<<[{<()<>>(<>[])}[(<><>)[[]<>]]]<<<[]<>><(){}>>{{{}<>}<<><>>}>>(<{{<>()}[()<>]}><[`;

let myArray = scan.split(/\n/g);
let answer = []; let couple = 0;
let stringArr = []; symbol = ""; notcomplete=[]; 
for (j = 0; j < myArray.length; j++) {
    stringArr = myArray[j].split("").filter(x => x!=" ") ;
    let helper = [];
    let firstFound = false;
    let i = 0;
    while ((!firstFound) && (i < stringArr.length)) {
        symbol = stringArr[i];
        if ((symbol === '[') || (symbol === '(') || (symbol === '<') || (symbol === '{')) { helper.push(symbol) }else{
        switch (symbol) {
            case "]":               
                if (helper[helper.length-1] ==='[') { helper.splice(helper.length-1, 1); } 
                else { firstFound = true;  }
                break;
            case ")":                
                if (helper[helper.length-1] ==='(') { helper.splice(helper.length-1, 1); } 
                else { firstFound = true; }
                break;
            case ">":
                if (helper[helper.length-1] ==='<') { helper.splice(helper.length-1, 1); } 
                 else { firstFound = true;;}
                break;
            case "}":         
                if (helper[helper.length-1] ==='{') { helper.splice(helper.length-1, 1); } 
                else { firstFound = true; }
                break;
        }}
        i++;
        if ((!firstFound)&&(i===stringArr.length)){
            notcomplete.push(helper);
        }
    }
}
let pointsArray=[];
notcomplete.forEach(element => {
    let points=0;
    for(i=element.length-1;i>=0;i--){
        switch (element[i]){
            case "(":points=points*5+1;break;
            case "[": points=points*5+2;break;
            case "{":points=points*5+3;break;
            case "<":points=points*5+4;break;
        } 
    }
    pointsArray.push(points);  
});
pointsArray.sort(function(a, b) {
  return a - b;
});
console.log(pointsArray[Math.floor(pointsArray.length/2)]);

