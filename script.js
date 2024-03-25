'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector(`.message`).textContent = 'I have been changed'; 
// document.querySelector(`.number`).textContent = 12; 
// document.querySelector(`.score`).textContent = 15; 
// console.log(document.querySelector(`.guess`).value =19);


let randomNumber = Math.trunc( Math.random() * 20) ; 
let score = 20; 

document.querySelector('.check').addEventListener('click', function() {
                const guessNumber = Number(document.querySelector('.guess').value); 
                console.log(typeof guessNumber); 
                // No Number
        if (!guessNumber) { 
            document.querySelector('.message').textContent = 'NO NUMBER' ; 
            document.querySelector('body').style.backgroundColor = 'red' ; 
            // Player wins
        } else if (guessNumber == randomNumber) {  
            document.querySelector('body').style.backgroundColor = 'green' ; 
            document.querySelector('.message').textContent = 'Correct !'; 
            if (score > Number(document.querySelector('.highscore').textContent)) {
                document.querySelector('.highscore').textContent = score ; 
            } 
        
        } 
            // PLayer guesses to high
        else  if (guessNumber > randomNumber) { 
            score--;
            document.querySelector('.score').textContent = score ; 
            document.querySelector('.message').textContent = 'Too high'; 
            document.querySelector('body').style.backgroundColor = 'red' ; 
            // Player guesses to low
        } else if (guessNumber < randomNumber) {
            score--;
            document.querySelector('.score').textContent = score; 
            document.querySelector('.message').textContent = 'Too low'; 
            document.querySelector('body').style.backgroundColor = 'red' ; 
        }


    } ) ;

document.querySelector('.again').addEventListener('click', function() { 
        score = 20;  
        document.querySelector('.score').textContent = score; 
        document.querySelector('.number').textContent = '?'; 
        document.querySelector('.message').textContent = 'Start guessing...';   
        document.querySelector('.guess').textContent =' '; 
        document.querySelector('body').style.backgroundColor = '#222'; 
    let randomNumber = Math.trunc( Math.random() * 20) ; 

 } ) 

 // Coding Challenge 

