'use strict'; // no global var


// capture name
var user = prompt('Hello There! What is your name?');
console.log('the users name is ' + user);

// send the user a greeting w/ guessing game rules
alert('Hello ' + user + '. To continue onto this site, please complete this guessing game about Dayne. Please answer "yes" or "no".');

// capture more user input, then send back if they got it right or wrong
var origin = prompt('Is Dayne from Seattle?');
if (origin === 'y' || origin === 'yes' || origin === 'n' || origin === 'no'){
    origin = origin.toUpperCase()
}
if (origin === 'YES'){
    alert('Correct.')
}else{
    alert('Incorrect.')
}

// capture more user input, then send back if they got it right or wrong
var movie = prompt('Does Dayne like Star Wars?');
if (movie === 'y' || movie === 'yes' || movie === 'n' || movie === 'no'){
    movie = movie.toUpperCase()
}
if (movie === 'YES'){
    alert('Correct.')
}else{
    alert('Incorrect.')
}

// capture more user input, then send back if they got it right or wrong
var car = prompt('Does Dayne drive a BMW?')
if (car === 'y' || car === 'yes' || car === 'n' || car === 'no'){
    car = car.toUpperCase()
}
if (car === 'YES'){
    alert('Correct.')
}else{
    alert('Incorrect.')
}

// capture more user input, then send back if they got it right or wrong
var hoowah = prompt('Was Dayne an Army Ranger?')
if (hoowah === 'y' || hoowah === 'yes' || hoowah === 'n' || hoowah === 'no'){
    hoowah = hoowah.toUpperCase()
}
if (hoowah === 'NO'){
    alert('Correct.')
}else{
    alert('Incorrect.')
}

// capture more user input, then send back if they got it right or wrong
var school = prompt('Has Dayne been to college?')
if (school === 'y' || school === 'yes' || school === 'n' || school === 'no'){
    school = school.toUpperCase()
}
if (school === 'NO'){
    alert('Correct.')
}else{
    alert('Incorrect.')
}

alert('Thank you ' + user + '. Enjoy reading more about me.')
