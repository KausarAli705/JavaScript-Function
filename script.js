'use strict';

// // default values in function
// const bookings =[]
// const creatBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// creatBooking('LH123');


// const flight = 'LH234';
// const kausar = {
//     name: 'Kausar Ali',
//     passport: 123456,
// };

// console.log(kausar.name, kausar.passport); 
// const checkIn = function (flightNum, passenger){ //passemger =kausar and passenger.name ka matlab kausar.name
//     flightNum = 'LH999',
//     passenger.name = 'Mr. ' + passenger.name;

//     if( passenger.passport === 123456){
//         alert('Checked in');
//     }else{
//         alert('Wrong passport');
//     }
// };

// checkIn(flight, kausar); 
// console.log(flight);
// console.log(kausar);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000);
//     console.log('new passpoer is :',person.passport);
// };

// newPassport(kausar);
// // console.log(newPassport(kausar));
// checkIn(flight, kausar)

// ==================================
// function accepting call back functions
// const oneWord = function (str){
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord =  function( str){
//     const [first, ...others] = str.split(' ');
//     console.log(first, others)
//     return [first[0].toUpperCase()+first.slice(1), ...others].join(' '); // captital the first letter
//     // return [first.toUpperCase(), ...others].join(' '); // capital the first word
// };

// // higher order function
// const transformer = function (str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformer string: ${fn(str)}`);
//     console.log(`Transformer by: ${fn.name}`);
// };

// transformer('javaScript is the best!', upperFirstWord);

// =======================================
// returing function
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// console.log(greet('hey'));
// const x = greet('hello');
// x('Kausar');
// x(('Danish'))

// // using above function in arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hallo')('Hassan')

// ======================================
// the call and apply method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() { // older style of writing method in object

    //  }
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        
        this.bookings.push({
            flight : `${this.iataCode}${flightNum}, ${name}`
        })
    }
}

// lufthansa.book(239, 'Kausar');
// lufthansa.book(110, 'Hassan');
// const book = lufthansa.book;
// book(23, 'kamran');
// book.call(lufthansa, 1, 'irfan');


// console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
//   const book = lufthansa.book;
  
  // Does NOT work
  // book(23, 'Sarah Williams');
//   ===========================================
  // Call method

//   book.call(eurowings, 23, 'Sarah Williams');
//   book.call(lufthansa, 23, 'Sarah Williams');
//   console.log(eurowings);
// =============================================
//   apply method
// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };

// const flightData = [546, 'Naimat Ali'];
// book.apply(swiss, flightData);
// console.log(swiss)
// // now we have better option
// book.call(swiss, ...flightData);

// ==========================================
// Blind method
// book.call(eurowings, 23, 'Sarah Williams');

// instead of having to use call all the time
// we can just bind once
// we can use these functions

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams')

// // this function only need name because flight number us pre-set here with help of bind function
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Azhar');
// bookEW23('Fahad');

// ====================================
// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// what if for certain country tax is pre define like germany where tax is 35%
// const addGer = addTax.bind(null, 0.35);
// addGer = value => value + value * 0.35;

// console.log(addGer(4000));

// const addTaxRate = function (rate){
//     return function (value){
//         return value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// ====================================
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Python', '3: C++'],
    // this generates [0 ,0, 0, 0]. More in the section
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number (
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        )
        console.log(answer);

        // register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers)
        } else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Immediately Invokded function expression
(function(){
    console.log('This will never run again');
})();

// arrow function
(() => console.log('This will never run again'))();