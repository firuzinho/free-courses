/* Task 3 */
/* Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде. */
/* Put your code here */
/**
 * Возвращает правильное окончание временных промежутков
 *
 * @param {number} number - заданное количество времени.
 * @param {array} n_array - массив с временными промежутками.
 * @return {string} ending - строка с правильным окончанием временных промежутков.
 */
function getEnding(number, n_array) {
	var ending,
		temp;

	number %= 100;
	if (number >= 11 && number <= 19){
		ending = n_array[2];
	} else {
		temp = number % 10;
		switch (temp) {
			case 1: 
				ending = n_array[0];
				break;
			case 2: 
				ending = n_array[1];
				break;
			case 3:
			case 4: 
				ending = n_array[1];
				break;
			default: 
				ending = n_array[2];
		}
	}
	if (number !== 0)
		return (number + " " + ending + " ");
	else 
		return "";
}

//Получение аргументов
var getFirstTime = parseInt(process.argv[2]),
	getSecondTime = parseInt(process.argv[3]),
	sumOfIntervals;

//Объявление массива с временными промежутками
var secArray = ["секунда", "секунды", "секунд"];
var minArray = ["минута", "минуты", "минут"];
var hoursArray = ["час", "часа", "часов"];
var daysArray = ["день", "дня", "дней"];

//Уставноление значений времени
var secPerMinute = 60;
var secPerHour = secPerMinute * 60;
var secPerDay = secPerHour * 24;

sumOfIntervals = (getFirstTime + getSecondTime);

//Получаем количество дней. И от суммы промежутков времени отнимаем количество дней в секундах
var days = Math.floor(sumOfIntervals / secPerDay);
sumOfIntervals -= (days * secPerDay);

var hours = Math.floor(sumOfIntervals / secPerHour);
sumOfIntervals -= (hours * secPerHour);

var minutes = Math.floor(sumOfIntervals / secPerMinute);
sumOfIntervals -= (minutes * secPerMinute);

var seconds = Math.floor(sumOfIntervals);

var resultInterval = getEnding(+days, daysArray) + getEnding(+hours, hoursArray) + 
				 	 getEnding(+minutes, minArray) + getEnding(+seconds, secArray);

process.stdout.write(resultInterval);