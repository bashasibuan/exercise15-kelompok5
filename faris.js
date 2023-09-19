/*Write a code that copies the first half of an array. With an odd number of array elements, 
the  middle element should belong to the first half*/

function copyHal(arr) {
    const length = Math.ceil(arr.length / 2);
    return arr.slice(0, length);
    }
    
    const iniArray = [1, 2, 3, 4, 5];
    const copyArray = copyHal(iniArray);
    console.log(copyArray);
    
    
    function hariKeBulan(bulan, tahun) {
        return new Date(tahun, bulan, 0).getDate();
    }