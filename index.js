const surya = require("./surya.js");
const faris = require("./faris.js");
const ibas = require("./ibas.js");

// 5
console.log(surya.tanpaSort("minum air"));
console.log(surya.pakaiSort("minum air"));

// 6

let dates = [];

dates.push(new Date("2019/06/25"));
dates.push(new Date("2022/06/26"));
dates.push(new Date("2020/06/27"));
dates.push(new Date("2021/06/28"));

console.log(surya.tanggalMin());

// 7

const dimensi2Array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(surya.calculateArray(dimensi2Array));
  
  // 8 

  //Prefix merupakan awal tulisan dalam sebuah kalimat, asumsi menggunakan prefix aturan bahasa inggris
  
  console.log(surya.longestPrefix(["machester", "manchmal", "march", "bigmac"]));
  console.log(surya.longestPrefix(["machester", "manchmal", "march", "macbook"]));