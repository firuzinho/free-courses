/* Task 1 */
/* Реализовать функцию перевода числа из одной системы счисления в другую. */
/* Put your code here */
/**
 * Возвращает конвертированное число из cистемы счисления S ( 2 <= S <= 36 ) в десятеричную с/c.
 *
 * @param {string} numberStr - строка, с исходным числом.
 * @param {number} base - число, система счисления указанного числа numberStr.
 * @return {number} конвертированное число из cистемы счисления S ( 2 <= S <= 36 ) в десятеричную с/c.
 */
function invertToDec(numberStr, base) {
    
    //для получения конвертированного символа
    var symbolToDec = (x) => {
        var x = x.toLowerCase().charCodeAt(0), 
        	a = "a".charCodeAt(0),
        	z = "z".charCodeAt(0);
        return ( x >= a && x <= z ) ? ( x - a + 10 ) : ( x - "0".charCodeAt(0));
    };
    
    return numberStr.split("").reverse().reduce((accumulator, x, i) => accumulator + Math.pow(base, i) * symbolToDec(x), 0);
}

//Получение аргументов
var num = process.argv[2],
	curBase = process.argv[3],
	newBase = process.argv[4],
	resultNum;

resultNum = invertToDec(num.toLowerCase(), curBase).toString(+newBase);
process.stdout.write(resultNum);