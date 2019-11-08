'use strict';

var correctanswer = 0

// capture name
var user = prompt('Hello There! What is your name?');
console.log('the users name is ' + user);

// send the user a greeting w/ guessing game rules
alert('Hello ' + user + '. To continue onto this site, please complete this guessing game about Dayne.');

// capture more user input, then send back if they got it right or wrong
function one(){
var origin = prompt('Is Dayne from Seattle?');
if (origin === 'y' || origin === 'yes' || origin === 'n' || origin === 'no'){
    origin = origin.toUpperCase()
    console.log(origin + ', Dayne is from Seattle.');
}
if (origin === 'YES'){
    alert('Correct.')
    correctanswer++;
}else{
    alert('Incorrect.')
}
}

one();

// capture more user input, then send back if they got it right or wrong
function two(){
var movie = prompt('Does Dayne like Star Wars?');
if (movie === 'y' || movie === 'yes' || movie === 'n' || movie === 'no'){
    movie = movie.toUpperCase()
    console.log(movie + ', Dayne likes Star Wars.');
}
if (movie === 'YES'){
    alert('Correct.')
    correctanswer++;
}else{
    alert('Incorrect.')
}
}
two();

// capture more user input, then send back if they got it right or wrong
function three(){
var car = prompt('Does Dayne drive a BMW?')
if (car === 'y' || car === 'yes' || car === 'n' || car === 'no'){
    car = car.toUpperCase()
    console.log(car + ', Dayne drives the Ultimate Driving Machine.');
}
if (car === 'YES'){
    alert('Correct.')
    correctanswer++;
}else{
    alert('Incorrect.')
}
}

three();

// capture more user input, then send back if they got it right or wrong
function four(){
var hoowah = prompt('Was Dayne an Army Ranger?')
if (hoowah === 'y' || hoowah === 'yes' || hoowah === 'n' || hoowah === 'no'){
    hoowah = hoowah.toUpperCase()
    console.log(hoowah + ', Dayne was not in the Army.');
}
if (hoowah === 'NO'){
    alert('Correct.')
    correctanswer++;
}else{
    alert('Incorrect.')
}
}
four();

// capture more user input, then send back if they got it right or wrong
function five(){
var school = prompt('Has Dayne been to college?')
if (school === 'y' || school === 'yes' || school === 'n' || school === 'no'){
    school = school.toUpperCase()
    console.log(school + ', Dayne did not go to school.');
}
if (school === 'NO'){
    alert('Correct.')
    correctanswer++;
}else{
    alert('Incorrect.');
}
}
five();

// question 6
function six(){
var favnum = 5;
var counter = 4;

while (counter > 0) {

var numGuess = prompt('What is my favorite number?');    
var numGuessInt = parseInt(numGuess);

    if (numGuessInt < favnum) {
        alert('Too low.');
        counter--;
    } else if (numGuessInt > favnum) {
        alert('Too High.')
        counter--;
    } else if (numGuessInt === NaN || numGuessInt === null) {
        alert('Please enter a real number.')
    } else if (numGuessInt === favnum){
        correctanswer++;
        break;
    }
}
}

six();

// question 7
function seven(){
var carBrand = ['bmw', 'lada', 'toyota','nissan'];

for (var i = 5; i >= 0; i--){

    var carBrandInt = prompt('What is my favorite brand of car?');
    if (carBrand.includes(carBrandInt)){
        alert('That is correct!');
        correctanswer++;
        break;
    } else {
        alert('That is wrong!');
    }
}
}
seven();


alert('Thank you ' + user + '. You guessed ' + correctanswer + ' out of 7 correctly. I hope you enjoy my creation!');
