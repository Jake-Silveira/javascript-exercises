const reverseString = function(inputString) {
    if(inputString != ""){
        var outputString = "";
            for(var i = inputString.length - 1; i >= 0; i--){
                outputString = outputString + inputString[i]};
                return outputString;
            } else return ''
    } 
    



// Do not edit below this line
module.exports = reverseString;
