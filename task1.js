// Задача 1. Реализовать функцию перевода числа из одной системы счисления в другую.

// Получение аргументов
var num = process.argv[2],
	curBase = process.argv[3],
	newBase = process.argv[4],
	resultNum;
// преобразования данного числа в системе счисления curBase в систему счисления newBase
resultNum = Number(parseInt(num, +curBase)).toString(+newBase);

// вывод
process.stdout.write(resultNum);
