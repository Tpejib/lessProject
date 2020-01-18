let money = prompt('Ваш бюджет на месяц?', 4000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-18'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
    
    let a1 = prompt('Введите обязательную статью расходов в этом месяце', 'Корм собаке'),
        a2 = prompt('Во сколько обойдется?', '1800'),
        a3 = prompt('Введите обязательную статью расходов в этом месяце', 'Интернет'),
        a4 = prompt('Во сколько обойдется?', '500');

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

    alert(appData.budget / 30);

    console.log(appData);
