// //problem 1

// function specialEleven(n) {
//     const less_one = n - 1;
//     return (n % 11 === 0 || less_one % 11 === 0) ? true : false;
// }
// console.log(
//     specialEleven(22),
//     specialEleven(23),
//     specialEleven(24));


// //problem 2
// function fizzString(str) {
//     var firstWord = str.charAt(0);
//     var lastWord = str.charAt(str.length - 1);
//     return firstWord == 'f' && lastWord == 'b' ? 'FizzBuzz' :
//         firstWord == 'f' ? 'Fizz' : lastWord == 'b' ? 'Buzz'
//             : str;
// }
// console.log(
//     fizzString('fig'),
//     fizzString('dib'),cleaer
//     fizzString('fib'));



function shareDigit(a, b) {
    var l1 = parseInt(a / 10);
    var r1 = a % 10;
    var l2 = parseInt(b / 10);
    var r2 = b % 10
    return (l1 == l2 || l1 == r2 || r1 == l2 || r1 == r2) || false;

}
console.log(shareDigit(13, 53),
    shareDigit(19, 22));

function blueTicket(a, b, c) {
    var ab = a + b;
    var bc = b + c;
    var ca = c + a;

    return (ab == 10 || bc == 10 || ca == 10) ? 10 : (ab - bc == 10 || ab - ca == 10) ? 5 : 0;

}
console.log(blueTicket(11, 1, 1),
    blueTicket(9, 2, 0),
    blueTicket(6, 1, 4));