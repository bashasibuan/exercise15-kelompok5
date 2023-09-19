//Soal 1
function checkwk() {
let  date = new Date;
let day = date.getDay();

let result;
if (day == 0 || day == 6) {
    result = "Weekend";
} 
else {
    result = "Weekday";
}
return result;
}
console.log(checkwk("21-01-2021"));

//Soal 2
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log(gcd_two_numbers(12, 13));

  //Soal3
  let lcm = (n1, n2) => {
    let lar = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    
    let i = lar;
    while(i % small !== 0){
      i += lar;
    }
    
    return i;
  }

  console.log(lcm(20, 15));