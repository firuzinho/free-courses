// Задача 2. Рассчитать количество дней до нового года.

/**
 * Возвращает количество дней в указанном месяце
 *
 * @param {number} year Число, заданный год.
 * @param {number} month Число, заданный месяц.
 * @return {number} количество дней в указанном месяце
 */
function getLastDayOfMonth(year, month) {
	var date = new Date(year, month + 1, 0);
	return date.getDate();
}

//Объявляем массив с названиями месяцев
var monthNames = [
	"января", "февраля", "марта",
	"апреля", "мая", "июня",
	"июля", "августа", "сентября",
	"октября", "ноября", "декабря"
];
//Получение аргументов
var getDay = parseInt(process.argv[2]),
	getMonth = process.argv[3],
	getYear = parseInt(process.argv[4]),
	curMonthIndex,
	numOfDays;

//Получаем индекс заданного месяца
curMonthIndex = monthNames.indexOf(getMonth);

//Определяем количество оставшихся дней в текущем месяце
numOfDays = (getLastDayOfMonth(getYear, curMonthIndex) - (getDay));

//Далее, складываем все дни в каждом месяца до декабря включительно
for (var i = curMonthIndex + 1; i < monthNames.length; i++) {
	numOfDays += getLastDayOfMonth(getYear, i);
}

process.stdout.write(String(numOfDays));