const fibonacci = (n) => {
    if (n < 0) {
        return 'OOPS';
    }
    if (Number(n) <= 2) {
        return 1;
    }
    return fibonacci(Number(n) - 1) + fibonacci(Number(n) - 2);
};

// Do not edit below this line
module.exports = fibonacci;
