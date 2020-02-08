// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello! ' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// function showThis(a ,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = 'red';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конктретного контекста - call, apply, bind


let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNamber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNamber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ES5
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

class Rectangle {
    constructor(height , width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);