let changeDay = '';

let name = prompt("do you know my name");
if (name == '') {
    alert("the name is empty")
} else if(name == 'hamza') {
    alert('you are right perfect')
}else{
    alert('wrong')
}
    
    let color = prompt("what is my favorite color");
    if (color == '') {
        alert('the color is empty pls choose one')
        } else if(color == 'blue'){
        alert("perfect that is right");
        }else{
            alert('wrong')
        }

let cars = prompt("what is kind of cars color do i like");
if (cars == '') {
    alert("the cars is empty")
} else if(cars == 'green') {
    alert('you are right perfect')
}else{
    alert('wrong')
}
    
    let food = prompt("what is my favorite food");
    if (food == '') {
        alert('the food is empty pls choose one')
        } else if(food == 'beef'){
        alert("perfect that is right");
        }else{
            alert('wrong')
        }


        let age = prompt("do you know my age");
if (age == '') {
    console.log('the age is empty')
    alert("the age is empty")
} else if(age == 24) {
    console.log('you are right perfect')
    alert('you are right perfect')
}else{
    alert('wrong')
}

let number = [33];
let choose = prompt('choose a number')
let secondChoose;
let thirdChoose;
let forthChoose;
for(let i=0 ; i<number.length ; i++) {
    if(choose == number[i]) {
        alert('perfect')
    }else if(choose > number[i]) {
        secondChoose = prompt('your answer very big pls again')
    }else {
        secondChoose = prompt('your answer very small pls again')
    }
    if(secondChoose == number[i]) {
        alert('perfect')
    }else if(secondChoose > number[i]) {
        thirdChoose = prompt('your answer very big pls again')
    }else {
        thirdChoose = prompt('your answer very small pls again')
    }
    if(thirdChoose == number[i]) {
        alert('perfect')
    }else if(thirdChoose > number[i]) {
        forthChoose = prompt('your answer very big pls again')
    }else {
        forthChoose = prompt('your answer very small pls again')
    }
    if(forthChoose == number[i]) {
        alert('perfect')
    }else {
        alert('sorry you failed the right answer is : '+number[i])
    }
}

let arrayRandom = [12 , 35 , 75 , 9 , 23];

// for() {
    
// }












    
