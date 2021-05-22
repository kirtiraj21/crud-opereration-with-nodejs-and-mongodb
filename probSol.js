//problem 1

function specialEleven(n) {
    const less_one = n - 1;
    return (n % 11 === 0 || less_one % 11 === 0) ? true : false;
}
console.log(
    specialEleven(22),
    specialEleven(23),
    specialEleven(24));


//problem 2
function fizzString(str) {
    var firstWord = str.charAt(0);
    var lastWord = str.charAt(str.length - 1);
    return firstWord == 'f' && lastWord == 'b' ? 'FizzBuzz' :
        firstWord == 'f' ? 'Fizz' : lastWord == 'b' ? 'Buzz'
            : str;
}
console.log(
    fizzString('fig'),
    fizzString('dib'),
    fizzString('fib'));

