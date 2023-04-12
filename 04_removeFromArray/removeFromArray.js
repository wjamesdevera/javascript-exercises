const removeFromArray = function(a, b) {
    const arr = Array.from(arguments);
    for (let i = 1; i < arr.length; i++) {
        let index = a.indexOf(arr[i]);
        if (index > -1) {
            a.splice(index, 1);
        }
    }
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;
