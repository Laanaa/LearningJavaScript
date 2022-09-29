// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }
 
// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };
 
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };
 
// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };
 
// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }
 
// makeEspresso();
 
// /* output
// Mesin kopi siap digunakan.
// Stok cukup. Bisa membuat kopi.
// Membuatkan kopi Anda...
// Kopi sudah siap!
// */

// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// .finally(() => {
//     console.log("Welcome!");
// })

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let value = 0
let sum =  myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
for(let i = 0; i < myArray.length; i++) {
    value += myArray[i];
}

const sumLodash = _.sum(myArray);

console.log(sumLodash);
console.log(sum);
console.log(value);
 
/* output
10
*/