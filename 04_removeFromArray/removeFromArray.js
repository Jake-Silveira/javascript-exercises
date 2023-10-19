const removeFromArray = function(array, ...args ) {
    const outputArray = [];

    array.forEach((item) => {
        if (!args.includes(item)){
            outputArray.push(item)
        };
    });
    
    return outputArray

};

// Do not edit below this line
module.exports = removeFromArray;
