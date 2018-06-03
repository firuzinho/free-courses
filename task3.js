// Задача 3. Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.

//Получение аргументов
var getDay = parseInt(process.argv[2]),
	getMonth = process.argv[3],
	getYear = parseInt(process.argv[4]),
	curMonthIndex,
	numOfDays;

