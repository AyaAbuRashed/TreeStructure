let changeDay = '';

let name = prompt("Enter your name please");
if (name == '') {
    console.log('your name is empty')
} else {
    console.log('welcome ' + name)
    let age = prompt("Enter your age please");
    if (Number(age) < 18) {
        prompt("please " + name + " tell your father enter his phone number because your age under 18 ");
    } else {
        prompt("enter your phone number");
        let food = prompt("what's kind of food do you like ?");
        if (food) {
            console.log("oooh that's perfect");
            
        }
        let cars = prompt("what's color of cars do you like ?");
        if (cars == "red" || cars == "green" || cars == "blue" || cars == "yellow" || cars == "gray" || cars == "pink") {
            alert('perfect color '+cars+' it is cool ')
   
          
    }
}
}

        let dayPrompt = prompt("What's today ??")
        let day = new Date().getDay();
        console.log(day)

if(day == 0 && dayPrompt == 'Sunday') {
    changeDay = 'Sunday'
}else if(day == 1 && dayPrompt == 'Monday') {
    changeDay = 'Monday'
}else if(day == 2 && dayPrompt == "Tuesday") {
    changeDay = 'Tuesday'
}else if(day == 3 && dayPrompt == "Wednesday") {
    changeDay = 'Wednesday'
}else if(day == 4 && dayPrompt == "Thursday") {
    changeDay = 'Thursday'
}else if(day == 5 && dayPrompt == "Friday") {
    changeDay = 'Friday'
}else if(day == 6 && dayPrompt == "Saturday") {
    changeDay = 'Saturday'
}

console.log(changeDay)
        switch(dayPrompt) {
            case changeDay == 'Sunday' &&  dayPrompt == 'Sunday':
                alert('you are right it is Sunday')
                break;
                case changeDay == 'Monday' && dayPrompt == 'Monday':
                alert('you are right it is Monday')
                break;
                case changeDay == 'Tuesday' && dayPrompt == 'Tuesday':
                alert('you are right it is Tuesday')
                break;
                case changeDay == 'Wednesday' && dayPrompt == 'Wednesday':
                alert('you are right it is Wednesday')
                break;
                case changeDay == 'Thursday' && dayPrompt == 'Thursday':
                alert('you are right it is Thursday')
                break;
                case changeDay == 'Friday' && dayPrompt == 'Friday':
                alert('you are right it is Friday')
                break;
                case changeDay == 'Saturday' && dayPrompt == 'Saturday' :
                alert('you are right it is Saturday')
                break;
                default:
                    if(day == 0) {
                        alert('You are wrong today is : Sunday')
                    }else if(day == 1) {
                        alert('You are wrong today is : Monday')
                    }else if(day == 2) {
                        alert('You are wrong today is : Tuesday')
                    }else if(day == 3) {
                        alert('You are wrong today is : Wednesday')
                    }else if(day == 4) {
                        alert('You are wrong today is : Thursday')
                    }else if(day == 5) {
                        alert('You are wrong today is : Friday')
                    }else if(day == 6) {
                        alert('You are wrong today is : Saturday')
                    }
        }
    
