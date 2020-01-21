


// if (num < 49) {
//     console.log('not good')
// } else if (num > 100) {
//     console.log('too much')
// } else {
//     console.log('good!')
// };

// (num == 50) ? console.log('good!') : console.log('not good')


// switch (num) {
//     case num < 49:
//         console.log('not good');
//         break;
//     case num > 100:
//         console.log('too much');
//         break;
//     case num > 80:
//         console.log('still too much');
//         break;
//     case 50:
//         console.log('good!');
//         break;
//     default:
//         console.log('Something wrong');
//         break;
// }

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i)
} 