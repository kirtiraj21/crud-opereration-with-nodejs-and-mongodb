// let user = {
//     show: () => {
//         console.log(argument);
//     }
// };
// user.show(1,2,3);

// let user = {
//     name: "GFG",
//     gfg1:() => {
//         console.log("hello " + this.name); // no 'this' binding here
//     },
//     gfg2(){       
//         console.log("Welcome to " + this.name); // 'this' binding works here
//     }  
//  };
// user.gfg1();
//user.gfg2();

// var day = 1;
// var dayName;
// switch (day) {
//     case 1:
//         dayName = 'Sunday';
//         break;
//     case 2:
//         dayName = 'Monday';
//         break;
//     case 3:
//         dayName = 'Tuesday';
//         break;
//     case 4:
//         dayName = 'Wednesday';
//         break;
//     case 5:
//         dayName = 'Thursday';
//         break;
//     case 6:
//         dayName = 'Friday';
//         break;
//     case 7:
//         dayName = 'Saturday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// console.log(dayName);

let fruits = [{
    firstname: "Malcom",
    lastname: "Reynolds"
},
{
    firstname: "Kaylee",
    lastname: "Frye"
},
{
    firstname: "Jayne",
    lastname: "Cobb"
}
]
let array = [];
fruits.map((item) => {
    const newdaata = [item.firstname].join(",");
    array.push(newdaata);


})
const allfruits = array.toString();
console.log(allfruits);



// const ripto = crypto.randomBytes(64).toString('hex');
// console.log(ripto);
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'