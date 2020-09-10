// the first question about my name 
function Q1(){
let name = prompt("1 - do you know my name");
if (name == '') {
    alert("the name is empty")
} else if (name == 'hamza') {
    alert('you are right perfect')
} else {
    alert('wrong but that\'s ok')
}
}
function Q2(){
// the second question about my favorite color
let color = prompt("2 - what is my favorite color");
if (color == '') {
    alert('the color is empty pls choose one')
} else if (color == 'blue') {
    alert("perfect that is right");
} else {
    alert('wrong but that\'s ok')
}
}
function Q3(){

// the third question about My favorite car color
let cars = prompt("3 - what is kind of cars color do i like");
if (cars == '') {
    alert("the cars is empty")
} else if (cars == 'green') {
    alert('you are right perfect')
} else {
    alert('wrong but that\'s ok')
}
}
function Q4(){
// I love lamb so this qustion about my best food 
let food = prompt("4 - what is my favorite food");
if (food == '') {
    alert('the food is empty pls choose one')
} else if (food == 'lamb') {
    alert("perfect that is right");
} else {
    alert('wrong but that\'s ok')
}
}
function Q5(){
// about my age
let age = prompt("5 - do you know my age");
if (age == '') {
    console.log('the age is empty')
    alert("the age is empty")
} else if (age == 24) {
    console.log('you are right perfect')
    alert('you are right perfect')
} else {
    alert('wrong but that\'s ok')
}
}
function Q6(){
// this variable for while
let i = 0;
// this variable for check in the end if the answer false i will give him the right answer
let check;
while (i < 4) {
    let choose = prompt('6 - choose a number')
    if (choose == 33) {
        alert('perfect')
        check = true;
        break;
    } else if (choose > 33) {
        alert('your answer very big pls again')
    } else {
        alert('your answer very small pls again')
    }
    i++;
}

if (check != true) {
    alert('sorry you failed the right answer is : 33')
}
}
function Q7(){
// this the seven question about asken the user one of these numbers ... when loop finesh i will give the mark to user
alert('Now let\'s play this game but You must know the correct numbers within 6 attempts . Are you ready ??')
let arrayRandom = [12, 25, 31, 48, 120, 47]
let rightAnswer = 0;
for (let k = 0; k < 6; k++) {
    let value = prompt('7 - Enter a number and take care you have a score')
    let number = parseInt(value)
    if (arrayRandom.includes(number)) {
        alert('the next number')
        rightAnswer++
    } else {
        alert('the next number')
    }
}

alert(`you got ${rightAnswer} marks`)
}

Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();




// var movies = ["The Matrix", "Frozen"];
// console.log(typeof(typeof(movies)))









// function rety(num) {

//     let fun = num-1
// for(let i=0 ; i<=fun ; i++) {

// for(let j=1 ; j<=i ; j++) {
//     document.write(j + " ")
// }
// document.write('<br>')
// }


// // for(let i=1 ; i<=num ; i++) {
// //     for(let k=0 ; k>=i ; k--) {
// //         document.write(" ")
// //     }
// //     for(let j=1 ; j<=i ; j++) {
// //         document.write(j + " ")
// //     }
// //     document.write('<br>')
// // }
// }

// rety(10)




