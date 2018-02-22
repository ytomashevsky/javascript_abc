/* ДЗ суммировать все цифры, больше 4
	имеем дело с составными типами данных
	1
	создаем цикл for по длинне массива
	проверяем переменную массива - это число или массив ? делаем рекурсию
	d= [1,2,3]
	typeof d - выводит тип  number но массив выводит ка object
	d.constructor.name отдает тип переменной d //Array
	2
	переменная сумматор должна находиться внутри функции
	Edit with Atom
*/

var numbers = [
		-5,3,19,24
		,[4,4,1,4,7,8,0,-6,5,8,7,6]
		,[1,3,5,6,8,7,[5,4,6,9,7,[2,3,4,6,5,7,9,2,1,2,5,6,8],8,5,6,1,3,2],5,6,4,2,6,8,0]
		,[1,2,4,6,5,7,9,5,4,6,3,2]
		]
	, numbers1 = [
		-5,3,19,24,4,4,1,4,7,8,0,-6,5,8,7,6,1,3,5,6,8,7,5,4,6,9,7,2,3,4,6,5,7,9,2,1,2,5,6,8,8,5,6,1,3,2,5,6,4,2,6,8,0,1,2,4,6,5,7,9,5,4,6,3,2
		]
	;

function addNumbers(d) {
	var summaryResult = 0;
	for (var i = 0; i < d.length; i++) {
		if (d[i].constructor.name == 'Array') {
	 		summaryResult += addNumbers(d[i]);
	 	}
		else if (d[i].constructor.name == 'Number' && d[i] > 4) {
			summaryResult += d[i] ;
		}
		console.log('выход: ', i, d[i], summaryResult);
		}
	return summaryResult;
	}
console.groupCollapsed('addNumbers(numbers) log');
var result = addNumbers(numbers);
console.groupEnd();
console.log(result);

console.groupCollapsed('addNumbers(numbers1) log');
result = addNumbers(numbers1);
console.groupEnd();
console.log(result);
