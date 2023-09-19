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

  //soal4
  const test = (str) => { 
    if (str.length === 0) 
     {
     return 'String should not be empty!'
    }
     if (typeof str !== 'string')
      {
        return 'It must be a string.'
      }
   const occurrence_Map = new Map()
 
   for (const char of str) 
     {
       occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
     }
 
 
   let max_char = { char: '', occur: -Infinity }
 
   for (const [char, occur] of occurrence_Map) {
     if (occur > max_char.occur) {
       max_char = { char,occur }
     }
   }
 
   return max_char.char
 }
 console.log(test("Madam"))