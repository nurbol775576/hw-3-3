 //&& - и,  || - или
 var userInn = '10810200300758'
 var firstNum = Number(userInn[0])
 if((firstNum=== 0 || firstNum === 1 || firstNum === 2) && userInn.length === 14){
    console.log('пользователь найден')
 }else{
    console.error('пользователь не существует')
 }

var euSize = 'l';
switch (euSize){
   case "S":
   case "S":
      console.log('S = 36 ');
      break;
      case 'm':
      case "M":
         console.log('M = 40 ');
         break;
         case 'l':
         case "L":
            console.log('L = 44 ');
            break;
            default:
            console.log('такого размера нет');         
}

//underfined - неопределенный тип данных
let lesson;
console.log(typeof lesson)
//5)null - нулевой тип данных
var course = null
console.log (typeof course)
//7) bigint 8)symbol
var Number = 890n
console.log(typeof Number);
//NaN - Not a number 
var word = 'qwerty'
var num = 56
console.log(word ** num)

//8) object - обьект или коплексный тип данных
var user = {
   name: 'Nurbol',
   surname: 'Tajibaev',
   age: 'null',
   phoneNumber: '0779135574',
   adress: {
      city: 'osh',
      street: 'undefined',
   },
   - 
   ismarriend:false,
   key:{
      key2:{
         key3:{
            key: 4 
      
            }
         }
      },
   }

   console.log(user)
   //получение данных из обьекта
   console.log(user.name)
   console.log(user.phoneNumber)
   console.log(user.adress.street)
   console.log(user.key.key2.key3.key4)

//добавление данных
user.profession = 'frontend-deeloper'
console.log(user)


//удаление данных
delete user.key
console.log(user.)

//получение ключей и значений
var userKeys = Object.keys(user)
console.log(userKeys)
var userValues = Object.
console.log(userValues)
var vk = Object.entries(user)
console.log(vk)
 

console.log(user.dvevervev    e(v:'ismarried'))

//
