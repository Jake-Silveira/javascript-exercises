const sumAll = function(inputOne, inputTwo) {
    if(inputOne >= 0 && inputTwo >= 0 && typeof inputOne === 'number' && typeof inputTwo === 'number'){
        var outputSum = 0;
        if(inputOne < inputTwo){
        for(let i = inputOne; i <= inputTwo; i++){
            var outputSum = outputSum + i
        }
        }else 
            for(let i = inputTwo; i <= inputOne; i++){
                var outputSum = outputSum + i
            };
    } else return 'ERROR'
    return outputSum
};

// Do not edit below this line
module.exports = sumAll;
