let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = +prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	choseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
			
			if((typeof(a)) === 'string' &&  (typeof(a)) != null &&  (typeof(b)) != null && a != '' && b != '' && a.length < 50){
				console.log('done');
				appData.expenses[a] = b;
			}  else {
				i--;
			}
		} 
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);
		alert("Ежедневный бюджет:" + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		}else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings : function () {
		if(appData.savings == true) {
			let save = +prompt("Какова сумма накоплений"),
				percent = +prompt("Под какой процент");
			
				appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего дипозита " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i <= 3; i++) {
			let a = prompt("Статья необязательных расходов?", '');
			for(let i = 1; i < 4; i++) {
				appData.optionalExpenses[i] = a;
			}
		} 
	},
	chooseIncome: function() {
		for(let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
			if(items != '' && items != null) {
				appData.income = items.split(', ');
				appData.income.push(prompt('Может что-то еще?', ''));
				appData.income.sort();
				appData.income.forEach (function (itemmassive, i) {
					alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
				});
			} else {
				i--;
			}
		}
	}
};

for (var prop in appData) {
	console.log("Наша программа включает в себя данные: " + prop + " - " + appData[prop]);
}


