let money, time;
function start() {
    money = prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) { //isNaN возвращает true когда не цифры
        money = prompt('Ваш бюджет на месяц?');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpensis: function() {
        for (let i = 0; i < 2; i++) {
            let question = +prompt('Введите обязательную статью расходов в этом месяце');
            let quesionHow = prompt('Во сколько обойдется?');
        
            if ( (typeof(question) ) === 'string' && (typeof(question)) != null && (typeof(quesionHow)) != null && question != '' && quesionHow != '' && question.length < 50) {
            appData.expenses[question] = quesionHow;
            } else {
                i--
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1)
        alert('Ежедневный бюджен составляет:' + appData.moneyPerDay)
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Kakova summa nakoplenii?"),
                percent = +prompt("pod kakoi prozent");
    
                appData.monthIncome = save/100/12*percent;
                alert("Doxod vash:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptExpense = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpense;
            console.log(appData.optionalExpenses)
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)")
        
        if ((typeof(items)) === 'string' && (typeof(items) == null) && (typeof(items) == undefined)) {
            console.log('Не верные данные!')
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может, что-то еще?'));
            appData.income.sort()
        };
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}















