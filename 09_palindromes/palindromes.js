const palindromes = (s) => {
    const regex = /[\W_]/g;
    const lowRegStr = s.toLowerCase().replace(regex, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
