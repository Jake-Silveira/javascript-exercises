const repeatString = function(inputString, inputNumber) {
    if (inputNumber >= 0){
        let stringOutput = '';
            for(let i = 0; i < inputNumber; i++){
                stringOutput = stringOutput + inputString}
        return stringOutput.toString()
    } else return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
