let money = +prompt('Ваш бюджет на месяц?', 4000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-18'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
    
// let a1 = prompt('Введите обязательную статью расходов в этом месяце', 'Корм собаке'),
//     a2 = prompt('Во сколько обойдется?', '1800'),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце', 'Интернет'),
//     a4 = prompt('Во сколько обойдется?', '500');



// for (let i = 0; i < 2;  i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'Корм собаке'),
//         b = prompt('Во сколько обойдется?', '1800');
    
//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != ''  && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert('Введите статью расходов!');
//         i--;
//     }
// };

// let i = 0;
// while (i < 2) {
//     i++;
    
//     let a = prompt('Введите обязательную статью расходов в этом месяце', 'Корм собаке'),
//         b = prompt('Во сколько обойдется?', '1800');
    
//     if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != ''  && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert('Введите статью расходов!');
//         i--;
//     }
// }

let i = 0;
do {
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Корм собаке'),
        b = prompt('Во сколько обойдется?', '1800');
    
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != ''  && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert('Введите статью расходов!');
        i--;
    }
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Error')
}

console.log(appData);