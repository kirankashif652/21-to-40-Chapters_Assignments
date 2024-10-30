

                        //////////// CHAPTERS 21-25    ////////////////////

//////// Q NO 1


// var firstName =prompt("Enter Your First name:")
// var lastName =prompt("Enter Your Last name:")


// var fullName = firstName + " " + lastName

// alert("Hello "  + fullName + "!")


//////// Q NO 2

// var userInput =prompt("Enter Your Favourite mobile phone model:")

// var userAns = userInput

//  document.write("My favourite phone is: "  +  userAns + "<br>")
//  document.write("Length of string is: " + userAns.length)

///////// Q NO 3

// var string = "Pakistani"

// var Index = string.indexOf("n")

//  document.write("String: " + string + "<br>")
//  document.write("Index of 'n': " + Index)

//////// Q NO 4

// var greeting = "Hello World"

//  var lastIndex = greeting.lastIndexOf("l")

//   document.write("String: " + greeting + "<br>")
//  document.write("Last index of 'l': " + lastIndex)


/////// Q NO 5

// var country = "Pakistani"

// var charIndex = country.charAt("3")

// document.write("String: " + country  + "<br>")
//  document.write("Character at index 3: " + charIndex)


//////// Q NO 6

// var firstName =prompt("Enter Your First name:")
// var lastName =prompt("Enter Your Last name:")


// var fullName = firstName.concat(" " , lastName)

// alert("Hello "  + fullName + " !")


/////// Q NO 7 

// var city = "Hyderabad"

//  document.write("City: " + city + "<br>")
//  document.write("After replacement: " + "Islam" + city.slice(5 , 9) )


///// Q NO 8 

// var message = "Ali and Sami are best friends. They play cricket and football together"

//  document.write( message.replaceAll("and" , "&")  )


//// Q NO 9

// var str = "472"
// document.write("Value: " + str + "<br>")
// document.write("Type: " + typeof str + "<br>")

// str = parseInt(str)

// document.write("Value: " + str + "<br>")
// document.write("Type: " + typeof str)


////// Q NO 10 


// var userInput = prompt("Enter Your Favourite Dry Fruit!")

// var userInput = userInput.toUpperCase()

// document.write( userInput)



///// Q NO 11 


 


///// Q NO 12 


// var num = 35.36

// document.write( "Number: " + num + "<br>" )

// var num = 3536

// document.write( "Result: " + num.toString() )


//// Q NO 13

// var userName = ['@' , '.' , ',' , '!']
// var userInput = prompt('Enter username here: ')
// var isTrue = false
// for(var i = 0; i <userName.length ; i++){
//     for(var j = 0 ; j < userInput.length ; j++){
//         if(userInput[j] == userName[i]){
//             isTrue = true
//             alert('Please enter a valid user name. Dont use '+ userName[i] + ' in user name.')
//             break
//         }
//     }
// }

// if(!isTrue){
//     alert('Valid username is: '+ userInput)
// }


//// Q NO 14


// var bakeryItems = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var userInput = prompt('Welcome to ABC Bakery. What do you want to order Sir/Madam:')
// var isTrue = 0;
// for( let i = 0 ; i < bakeryItems.length ; i++){
//     if(bakeryItems[i] === userInput.toLowerCase()){
//         isTrue=1;
//         alert(userInput +' is available at index ' + i + ' in our bakery');
//         break;        
//     }
// }

// if(!isTrue){
//     alert('We are sorry. '+ userInput +' is not available in our bakery');
// }



///// Q NO 15 

// var password = 'kiran123'
// var isTrue = false
// for(var i = 0 ; i < password.length ; i++){
//     if(password[0]>= 0 && password[0]<=9){
//         isTrue= true
//         console.log('Password can not begin with a number\nPlease enter a valid password');
//         break
//     }
//     else if (password.length< 6){
//         isTrue= true
//         console.log('Password must be atleast 6 characters');
//         break
//     }
//     else if(!/[a-z]/i.test(password) || !/[0-9]/.test(password)){
//         isTrue= true
//         console.log('Password should contain alphabets and numbers');
//         break
//     }
// }
// if (!isTrue) {
//     console.log('Congrats! Your password is correct');
    
// }

///// Q NO 16 

// var university = 'University of karachi';
// var str = university.split('');
// for(var i = 0 ; i < str.length ; i++){
//     document.write(str[i]+ '<br>')
// }

//// Q NO 17 

// var input = 'Pakistan'
// document.write('User input: ' + input + "<br>");
// document.write('Last character of input: '+ input.charAt(input.length-1));


//// Q NO 18 
// var str  = ' The quick brown fox jumps over the lazy dog.'
// var match = 0
// var string = str.split(' ');
// for( var i = 0; i < string.length ; i++){
//     if (string[i].toLowerCase() === 'the') {
//         match ++ ;       
//     }    
// }
// document.write('Text: '+str);
// document.write('There are '+ match + ' occurrence (s) of word "the"');


                        //////////// CHAPTERS 26-30    ////////////////////


////// Q NO 1                      

// var num = +prompt("Enter a positive integer!")

// document.write("Number: "+ num + "<br>" )
// document.write("round off value: "+ Math.round(num) + "<br>" )
// document.write("floor value: "+ Math.floor(num) + "<br>" )
// document.write("ceil value: "+ Math.ceil(num) + "<br>" )


////// Q NO 2     
 
// var num = +prompt("Enter a negative floating point number!")
 

// document.write("Number: "+ num + "<br>" )
// document.write("round off value: "+ Math.round(num) + "<br>" )
// document.write("floor value: "+ Math.floor(num) + "<br>" )
// document.write("ceil value: "+ Math.ceil(num) )


////// Q NO 3     

// var num = +prompt("Enter any positive or negative number!")

// document.write("The absolute value of: "+ num + " is " + Math.abs(num))


////// Q NO 4     


// var num = 6
// var num = 4


// var diceValue1 = Math.random()*6
// var diceValue2 = Math.random()*6
// var dice1 = Math.floor(diceValue1)+1
// var dice2 = Math.floor(diceValue2)+1

// document.write("Random dice value: "+ dice1 + "<br>" )
// document.write("Random dice value: "+  dice2 )


////// Q NO 5     


// var head = Math.random()*2
// var tail = Math.random()*2
// var coinValue1 = Math.floor(head)+1
// var coinValue2 = Math.floor(tail)+1

// document.write(coinValue1 +  "    Random coin value: Heads" + "<br>" )
// document.write(coinValue2  +   "    Random coin value: Tails")


////// Q NO 6     

// var randomNum = Math.random()*100
// var num = Math.floor(randomNum)+1

// document.write("Random number between 1 and 100 : "+ num + "<br>" )


////// Q NO 7

// var weight = prompt("Enter your weight!")

// var userWeight =parseFloat(weight)

// document.write("The Weight of user is : "+ userWeight + " kilogram" + "<br>" )



//////  Q NO 8

// var userInput = +prompt("Enter any number between 1 to 10 !");

// var random = Math.random()*10;
// var sceretNo = Math.floor(random)+1;

// if(userInput === sceretNo){
// alert("congratulations!!!")
// }else{
//   alert("try again!")
// }



                        //////////  CHAPTERS 31-34    ////////////////////


 ///// Q NO 1 

// var date = new Date();
// console.log(date);



///// Q NO 2

// var months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
// var month = date.getMonth();
// var currentMonth  = months[month];
// console.log('Current month: ' + currentMonth);


///// Q NO 3

// var days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
// var day = date.getDay();
// var currentDay = days[day];
// console.log('Today is: ' + currentDay);



///// Q NO 4

// var currentDay = prompt('Enter day! ')
// if(currentDay.toLowerCase() === 'saturday' || currentDay.toLowerCase() === 'sunday'){
//     console.log("It's Fun day");
// }else{
//     console.log("It's working day");
// }



/////   Q NO 5

// var DayofMonth = date.getDate();
// if (DayofMonth >= 1 && DayofMonth <= 15) {
//     console.log('First fifteen days of the month.');
// }else if(DayofMonth >= 16 && DayofMonth <= 31){
//     console.log('Last days of the month.');
// }else{
//     console.log('It is invalid month');
// }


///// Q NO 6 


// console.log('Current Date: ' + date);
// var milisecondsSince_1970 = date.getTime();
// console.log('Elapsed millisecond since January 1, 1970:  '+milisecondsSince_1970);
// var minutesSince_1970 = date.getTime() 
// var min = 1000 * 60
// var minutes = date.getTime()
// var totalMinutes = Math.round(minutes/min)
// console.log( 'Elapsed minutes since January 1, 1970:' +totalMinutes);




////// Q NO 7

// var hour = date.getHours();
// var min = date.getMinutes();

// if(hour >= 1 && hour < 12 && min >= 0 && min <= 59){
//     console.log('Hello Its AM');
// }else if(hour > 12 && hour <= 24){
//     console.log('Hello its PM');
// }else if(hour === 12 && min === 0) {
//     console.log('Hello Its Noon');
// }else{
//     console.log('Invalid time. Please enter hours between 0 and 23.');
// }


////// Q NO 8


// var lastMonthOf_2020 = new Date('12/31/2020')
// console.log( 'Laster date' +lastMonthOf_2020);


////// Q NO 9


// var pastDate = new Date("April 9, 2024")  ;
// var tillDate = new Date('October 25, 2024')  ;

// var miliSecPastDate = pastDate.getTime();
// var miliSecTillDate = tillDate.getTime();

// var difference = miliSecTillDate - miliSecPastDate
// var dayDifference = difference / (1000 * 60 * 60 * 24)

// console.log(dayDifference + ' days have passed since 1st Ramadan, ' + pastDate.getFullYear());


/////// Q NO 10 

// var startDate = new Date("2015-01-01T00:00:00");
// var endDate = new Date();
// var timeDifference = endDate - startDate;
// var elapsedSeconds = Math.floor(timeDifference / 1000);
// console.log('On reference date ' + startDate + ' , ' + timeDifference + ' seconds had passed since beginning of ' + "2015");



///// Q NO 11 


// var currentDate = new Date();
// console.log('Current date: ' + currentDate);

// var pastHour = currentDate.getHours()-1

// currentDate.setHours(pastHour)
// console.log( '1 hour ago , it was ' +currentDate);


/////  Q NO 12 

// var currentDate = new Date();
// console.log('Current date: ' + currentDate);

// var yearsBack = currentDate.getFullYear() - 100

// currentDate.setFullYear(yearsBack);
// console.log('100 years back, it was ' + currentDate);


////// Q NO 13


// var age = prompt('Enter your age to find your birth year!');
// console.log('Your age is ' + age);

// var currentDate = new Date();
// var birthYear = currentDate.getFullYear() - age;

// console.log( 'Your birth year is ' + birthYear);


//////  Q NO 14 


// var monthNames = [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']

// var customerName = 'Kiran'
// var currentMonth = monthNames[date.getMonth()]
// var numberOfUnits = 410
// var chargesPerUnit = 16
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = 350
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge ;

// document.write('<h1>K-Electric Bill</h1>' + '</br>')
// document.write('Customer Name: ' + customerName + '</br>')
// document.write('Month: ' + currentMonth + '</br>')
// document.write('Number of units: ' + numberOfUnits + '</br>')
// document.write('Charges per units: ' + chargesPerUnit + '</br>' + '</br>' + '</br>')
// document.write('Net Amount Payable (within Due Date): ' + netAmountPayable + '</br>')
// document.write('Late payment Surcharges: ' + latePaymentSurcharge + '</br>')
// document.write('Gross Amount Payable (after Due Date): ' + grossAmountPayable)                       




                       //////////   CHAPTERS 35-38    ////////////////////



/////// Q NO 1


// function dateAndTime (){
//     var date = new Date();
//     console.log(date);
// }

// dateAndTime();


////// Q NO 2 

// function greet (fName , lName){
//     alert('Hello ' + fName + ' ' + lName + "!");
// }

// var firstName = prompt("Enter your first name!");
// var lastName = prompt ("Enter your last name!");
// greet(firstName , lastName)


///////  Q NO 3 

// function add (fNum , sNum){
//     return fNum + sNum
// }
// var fNumber = +prompt('Enter the first number!')
// var sNumber = +prompt('Enter the second number!')
// var addNumbers = add(fNumber ,sNumber)
// console.log(addNumbers);


//////// Q NO 4 


// function calculator (num1 , num2 , operator ){
//     if(operator === '+'){
//         return num1 + num2 ;
//     }else if (operator === '-'){
//         return num1 - num2
//     }else if (operator === '*'){
//         return num1 * num2;
//     }else if (operator === '/'){
//         return num1 / num2
//     }else {
//         alert('Choose those operators which are in options! ')
//     }

// }


// var number1 = +prompt('Enter the first number: ')
// var number2 = + prompt('Enter the second number ')
// var operator = prompt('Choose the operation which you are want to apply:\n1.  +\n2.  -\n3.  *\n4.  / ' )
// var result = calculator(number1 , number2 , operator);
// console.log('Result '+ result);



///////  Q NO 5 


// function applySquare (number){
//     return number * number
// }

// var square = +prompt('Enter a number which you want to square!')
// var result = applySquare(square);
// console.log('result: '+ result);



////// Q NO 6


// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1
//     } else if (num < 0) {
//         throw new Error("Factorial is not defined for negative numbers");
//     } else {
//         var result = 1
//         for (var i = 2; i <= num; i++) {
//             result *= i
//         } return result
//     }
// }
// var number = +prompt('Enter a number to findout the factorial! ')
// var factor = factorial(number)
// console.log(factor);


/////// Q NO 7 


// function counting (start , end){
//     if(start < end){
//         console.log('Forward counting');
//         for(var i = start ; i <= end ; i++){
//            console.log(i);

//         }
//     }else if (end < start){
//         console.log('Backward counting');
//         for(var i = start ; i >= end ; i--){
//             console.log(i);            
//         }
//     }
// }

// var num1 = +prompt('Enter a start number: ')
// var num2 = +prompt('Enter an end number: ')
// counting(num1 ,num2);


/////// Q NO 8


// function hypo (p , b){

//     function square(num){
//         return num* num
//     }

//     var hypotenuse = square(p) + square(b)
//     return  hypotenuse
// }
// var per = +prompt('Enter value for perpendicular: ')
// var base = +prompt('Enter value for base: ')

// var result = hypo( base , per )
// console.log( 'Hypotenuse: '  + result);


// function hypotenuse (base , perpendicular){
//     return ((base*base) + (perpendicular* perpendicular))
// }

// var result = hypotenuse(2 , 4);
// console.log(result);



///// Q NO 9 


// function calculateAreaOfRectangle (width  , height){
//     return width * height
// }


// var w = +prompt('Enter the value for width: ')
// var h = +prompt('Enter the value for height: ')
// var area = calculateAreaOfRectangle(w , h)
// console.log( 'Area of a rectangle: ' + area);


// var area = calculateAreaOfRectangle(4 , 8)
// console.log( 'Area of a rectangle: ' + area);



////// Q NO 10


// function checkPalindrome(text) {
//     text = text.toLowerCase()
//     var reversed = text.split('').reverse().join('');
//     if (text === reversed) {
//         return text + ': It is a palindrome';
//     } else {
//         return text + ': It is not a palindrome';
//     }
// }

// var palindromeText = prompt('Enter a text to check whether it is palindrome or not: ')
// console.log(checkPalindrome(palindromeText));



///////  Q NO 11


// function capitailze( str) {
//     var splitString = str.split(' ');
//     var subString
//     var join = ''
//     for (var i = 0; i < splitString.length; i++) {
//         subString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
//         join += subString + ' ';

//     } return join
// }

// var str = prompt('Enter any string!')
// console.log(capitailze(str.trim()));



//////  Q NO 12 


// function findLongestWord(str) {
//     var words = str.trim().split(' ');

//     var longestWord = '';
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             longestWord = words[i];
//             maxLength = words[i].length;
//         }
//     }
//     return longestWord;
// }

// var str = 'Web Development Tutorial';
// console.log(findLongestWord(str)); 



///////  Q NO 13


// function countTheCharacter (string , char){
//     var matchString = string.toLowerCase()
//     var matchChar   = char.toLowerCase()
//     var counter = 0

//     for(var i = 0 ; i < matchString.length ; i++){
//         if(matchString[i] === matchChar){
//             counter++
//         }
//     }

//     return counter
// }
// var string = 'JSResourceS.com'
// var char = 's'
// console.log( 'The occurence of ' + char + ' in ' + string + ' is '  +countTheCharacter(string , char));



/////// Q NO 14


// function calcCircumference (r){
//     var pie = 3.142
//     return 2 * pie * r
// }

// function calcArea (r){
//     var pie = 3.142 
//     return pie * r * r
// }

// var radius = +prompt('Enter the radius to findout the Area and circumference of circle!')
// console.log( 'The area of circle is ' +calcArea(radius));
// console.log( 'The circumference of circle is ' +calcCircumference(radius));                   




                        /////////////   CHAPTERS 38-42    ////////////////////