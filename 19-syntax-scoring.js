let scan =`([<([{{<<(<<{[<><>)}<([][])<<>{}>>>{[{(){}}(()[])]<{()()}<()()>>}>([<<{}<>>(<><>)><[{}[]](<>())>][
    ({{<<(<<<<{{[({}{})<[]()>]<([]{}){[]<>}>}{([{}[]]}}}>({(((()()))<{<>()}[<>()]>)[{(<>{})(()[])}[{[]
    ..
    {<{<{[([(<<[{<()<>>(<>[])}[(<><>)[[]<>]]]<<<[]<>><(){}>>{{{}<>}<<><>>}>>(<{{<>()}[()<>]}><[`;

let myArray = scan.split(/\n/g);

let answer = []; let couple = 0;
let stringArr = []; symbol = "";
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
                else { firstFound = true; answer.push(57);  }
                break;
            case ")":    
                if (helper[helper.length-1] ==='(') { helper.splice(helper.length-1, 1); } 
                else { firstFound = true; answer.push(3); }
                break;
            case ">":
                if (helper[helper.length-1] ==='<') { helper.splice(helper.length-1, 1); } 
                 else { firstFound = true; answer.push(25137);}
                break;
            case "}":               
                if (helper[helper.length-1] ==='{') { helper.splice(helper.length-1, 1); } 
                else { firstFound = true; answer.push(1197); }
                break;
        }}
        i++;
    }
}
const reducer = (accumulator, curr) => accumulator + curr;
console.log(answer.reduce(reducer));

