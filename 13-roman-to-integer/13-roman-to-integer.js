/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let romanArr = s.split('');
    for(let i = 0; i < romanArr.length; i++){
        if(romanArr[i] === "M"){
            sum += 1000;
        } else if (romanArr[i] === 'D'){
            sum += 500;
        } else if(romanArr[i] === 'L'){
            sum += 50;
        } else if(romanArr[i] === 'V'){
            sum += 5;
        } else if(romanArr[i] === 'C' && (romanArr[i + 1] === 'D' || romanArr[i + 1] === 'M')){
            sum -= 100; 
        } else if(romanArr[i] === 'X' && (romanArr[i + 1] === 'L' || romanArr[i + 1] === 'C')){
                  
                  
         sum -= 10;   
         } else if(romanArr[i] === 'I' && (romanArr[i + 1] === 'V' || romanArr[i + 1] === 'X')){
           sum -= 1;
        } else if(romanArr[i] === 'C'){
            sum += 100;
        } else if(romanArr[i] === 'X'){
            sum += 10;
        } else if(romanArr[i] === 'I'){
            sum += 1;
        }
    }       
    return sum;
};