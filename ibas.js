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
console.log(checkwk("21-01-2021"))