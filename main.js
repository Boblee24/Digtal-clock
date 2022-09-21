// const container = document.querySelector('.container');
// // var change = document.createElement('button');
// // change.innerText = 'Change to 24hr Format';
// change.name = 'Click Me'
// container.appendChild(change)
// function digital_clock() {
    
//     function main_digital_clock(prams) {
//         var date = new Date(); 
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var session = 'AM'
//     var dayAlpha = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     var day = dayAlpha[date.getDay()];
//     var monthAlpha = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']
//     var month = monthAlpha[date.getMonth()];
//     var dayNumber = date.getDate();
//     var year = date.getFullYear();
//     if(hour == 0){
//          hour = 12
         
//         }
//         if(seconds < 10){
//             seconds = "0" + seconds
//         }
//         if (minutes < 10){
//         minutes = '0' + minutes
//     }
//     if(hour > 12){
//         session = "PM"
//         hour = hour - 12;
//     }

//     if(hour < 10){
//         hour = '0' + hour
//     }
    
    
//     const time = hour + ':' + minutes + ':' + seconds +' '+ session;
//     const dateAlpha = day + ', ' + month + ' ' + dayNumber + 'th ' + year; 
//     document.querySelector('main').innerText= dateAlpha
//     document.querySelector('section').innerText = time;    
//     setTimeout(
//         main_digital_clock
//         , 1000);
        
//         change.addEventListener('click', () => {
//             if(hour < 12){
//                 session = "AM"
//                 hour = hour + 12;
//                 console.log('Success')
//             }
//         })
//     }
//     main_digital_clock()

// }
// digital_clock();

// console.log(hour + ':' + minutes + ':' + seconds)

setInterval(setDate, 1000)
const currentTime = document.querySelector('main')
const currentDate = document.querySelector('section')
let format;
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        format = button.getAttribute('data-format')
        currentTime.setAttribute('data-format', format)
    })
})

function setDate(){
    const date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM'

    var dayAlpha = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var day = dayAlpha[date.getDay()];
    var monthAlpha = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']
    var month = monthAlpha[date.getMonth()];
    var dayNumber = date.getDate();
    var year = date.getFullYear();
    let position = 'th'

    if(hour < 10){
        hour = "0" + hour
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = '0' + seconds
    }

    let dayNumb = String(dayNumber);
    // let position = 'th';
    let position_length = dayNumb.length;
    let dayPosition = dayNumb.substring(position_length, 1);
    console.log(dayPosition);

    if(dayPosition == 1){
        position = 'st';
    };
    if(dayPosition == 2){
        position = 'nd';
    };
    if(dayPosition == 3){
        position = 'rd';
    }
    if(hour > 12){
        session = 'PM'
    }


    if(format == 12 && hour > 12){
        hour = '0' + (hour - 12)
    }

    currentTime.innerHTML = `<h2>${hour}:${minutes}:${seconds} ${session}</h2>`
    currentDate.innerHTML = `<h3>${day}, ${month} ${dayNumber}${position} ${year}. `
}
setDate()

