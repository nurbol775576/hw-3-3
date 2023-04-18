 //map
//  var som = [30000,50000,78000,100000] 
//  var dollar= som.map(i => i / 86);
//  var fixdollar = dollar.map(i => i.toFixed());
//  console.log(dollar);
//  console.log(fixdollar)

// forEach
//  var numbers = [1,2,3,4,5,6,7,8,9,]
//  numbers.forEach(function (num){
//      var result = num ** 2
//      console.log(`квадрат числа ${num}  ${result}`);

//  })

// //filter
// var users = [
//     {id: 1, name:'Adam', age:34},
//     {id: 2, name:'John', age:21},
//     {id: 3, name:'Oliver', age:16},
//     {id: 4, name:'Allen', age:23},
//     {id: 5, name:'William', age:17},
//     {id: 6, name:'Olivia', age:15},
// ]

 var result = users.filter(user => user.name.includes('J'))
var age = users.filter(user => user.age)
switch (i) {
    case 1:
        month = 'Январь'
        break;
    case 2:
        month = 'Февраль'
        break;
    case 3:
        month = 'Март'
        break;
    case 4:
        month = 'Апрель'
        break;
    case 5:
        month = 'Май'
        break;
    case 6:
        month = 'Июнь'
        break;
    case 7:
        month = 'Июль'
        break;
    case 8:
        month = 'Август'
        break;
    case 9:
        month = 'Сентябрь'
        break;
    case 10:
        month = 'Октябрь'
        break;
    case 11:
        month = 'Ноябрь'
        break;
    case 12:
        month = 'Декабрь'
        break;
}
  console.log((i === 1 ? 'Год начинается с ': 'А затем') + month)

}
//цикл for ... of
// var nums2 = 


// var array = [2,2,3,4,5,5,6,3,5,7,8,9,0,0,6,5,3,4,5,6,]
// var uniqArr = []
// array.forEach((elem)=>{
//     uniqArr.includes(elem) {
//         uniqArr.push(elem)
//     }
//     console.log(uniqArr);
// })


// // //функции
// // function printDelimiter(){
// //     console.log('-'.repeat(100))
// //}