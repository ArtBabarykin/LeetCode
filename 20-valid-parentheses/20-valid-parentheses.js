/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
           arr.push(s[i])
           } else if(legend[arr.pop()] !== s[i]){
                     return false;
                     }
    }
    return arr.length ? false : true;
};