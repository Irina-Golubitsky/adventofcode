let scan = `forward 1
down 6
forward 8
..
forward 3`

let myArray = scan.split(/\n/g);
let forward = 0, depth = 0, aim = 0;
myArray.forEach(function (element) {
   if (element.includes("forward")) {
      forward = forward + parseInt(element.replace("forward ", ''));
      depth = depth + aim * parseInt(element.replace("forward ", ''));
   }
   else {
      if (element.includes("down")) {
         aim = aim + parseInt(element.replace("down ", ''))
      } else {
         aim = aim - parseInt(element.replace("up ", ''))
      }
   }
})
console.log(depth * forward);
