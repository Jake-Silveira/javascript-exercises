const leapYears = function(inputYear) {
    let outputTrueOrFalse = false
        if(inputYear % 4 === 0 && inputYear % 100 != 0 || inputYear % 400 === 0){
            outputTrueOrFalse = true
        }else outputTrueOrFalse = false

    return outputTrueOrFalse
};

// Do not edit below this line
module.exports = leapYears;
