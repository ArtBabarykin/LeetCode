/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let sum = 0;
    
    s.split('').forEach((letter, index, array) => {
        if(numbers[array[index + 1]] === undefined || numbers[letter] >= numbers[array[index + 1]]){
           sum += numbers[letter];
           } else if(numbers[letter] < numbers[array[index + 1]]){
                     sum -= numbers[letter];
                     }
    })
   
    
    return sum;
};