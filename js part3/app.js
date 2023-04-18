//классы (виды) операторов:
//1)ударные - +, !, -
// var d =prompt('')
//!true (не true)
// -50
//2)бинарные - математические действия
//3)тернарные операторы
 //true - white, false - black
// var playerColor = 'black'
// if(playerColor)
//     console.log('Ты начинаешь')
// }else{
//console.log('Жди своей очереди')
// }
//тоже самое через тернарки
// console.log(playerColor === 'white' ? 'Ты начинаешь'  :  'Жди свой очереди')


// var ageUser = prompt(  'enter your age - ')//19
// console.log(ageUser > 18 ? 'Доступ разрешен'  :  'Доступа нет')


//truthy and falsy - выражения
//falsy -> false,0,'',underfind,null,NaN, -0,0n
// var isready = 67//true
// console.log(isready ? 'True' : 'False');




//array - массив
// var number = [4, 6, 7, 5, 9, 0,]
// console.log(numbers.sort())
// console.log(typeof numbers)
//индексация в массивах
// console.log(numbers[4])
// console.log(numbers[6][3])
var matrix = [
    [1,2,3],
    [4,5,6,],
    [7,8,9]
]

console.log(matrix[2][1])
//методы массива
var fruits = ['banana', 'orange', 'apple'];
fruits.push('cherry')
console.log(fruits)
var element = fruits.pop() 
console.log(fruits)
console.log(element)
// fruits.splice(start:3)
console.log(fruits)
  

var joinFruit = fruits.join()
console.log(joinFruit.toUpperCase())
console.log(typeof join)


// //цикл white
// var fruits2 = ['banana', 'orange', 'apple', 'cherry'];
// var fruitForFound = 'apple'
// var i = 0
// while(i < 4){
//    if(fruits2[i] === fruitForFound)console.log('фрукт был найден под индексом ', i)
// i++; // i = i i+1, i +=1
// }

//цикл for
var names = ['anna', 'jack', 'john', 'olivia', 'tim']
var blcklist = ['jack', 'tim']
for(var i = 0; i < names.length; i++){
    if(blcklist.includes(names[i].toLowerCase())){
    console.warn(`${names[i]} есть в черном списке`);
    continue
}
 console.log(`Добро пожаловать  , дорогой(-ая) ${names[i]}`)
}

