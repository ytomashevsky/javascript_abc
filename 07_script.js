/* 07
	см конспект 07 урок
*/

var add = (
 function () {
	 var counter = 0; 
	 return function () {
		return counter++;
		}
 }
 )();
 
 /* в консоли
	add
	ƒ () {
	   return counter++;
	   }
	add()
	0
	add()
	1
 */
 
 /* а теперь в объектно-ориентиованный стиль */
 
function Adder() {
	var t = this;
	t.counter = 0;
	
	t.add=function () {
		return t.counter++;
		}
	}
var a1 = new Adder(); // новый объект 

/* консоль
a1.add
ƒ () {
		return t.counter++;
		}
a1.add()
0
a1.add()
1
a1.add()
2
*/

/* 
	рекурсия - многократное обращение к самому себе с неограниченым уровнем вложенности
	function myFunc(x) { myFunc(x); }
	
	любую циклическую задачу можно решить рекурсивно но не наоборот
*/
function recursion(x){

 if (x>0){ // Условие, по которому функция решает
  console.log("Beep "+x+"!");
  recursion(--x);  // когда вызывать себя заново
  }
 else {
  return;	// а когда заканчивать
  }
 }
 
 // #################################
 
 function factorial(n) {
 	if(n>1){
 //		console.log(n, n-1);
 		return n*factorial(n-1);
 		}
 	else if  (n==1) {
 		return 1;
 		}
 	} 
 	
 	
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
*/

var numbers = [
	-5,3,19,24
	,[4,4,1,4,7,8,0,-6,5,8,7,6]
	,[1,3,5,6,8,7
		,[5,4,6,9,7
			,[2,3,4,6,5,7,9,2,1,2,5,6,8]
			,8,5,6,1,3,2
			]
			,5,6,4,2,6,8,0
		]
	,[1,2,4,6,5,7,9,5,4,6,3,2]
	]
	, numbers1 = [-5,3,19,24,4,4,1,4,7,8,0,-6,5,8,7,6,1,3,5,6,8,7,5,4,6,9,7,2,3,4,6,5,7,9,2,1,2,5,6,8,8,5,6,1,3,2,5,6,4,2,6,8,0,1,2,4,6,5,7,9,5,4,6,3,2]
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
//		 console.log('выход: ', i, d[i], summaryResult);
		}
	return summaryResult;
	}
var result = addNumbers(numbers);
console.log(result);
result = addNumbers(numbers1);
console.log(result);

