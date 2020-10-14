var lives = 5;
var score = 20;
var highScore = 200;

// 1. Uncomment the line of code below of the comparrison operator and see what prints to the console.
//console.log(highScore > score); 

// 2. Using #1 as an example, check if lives is less than the score. Print the result to the console



// 3. Write a console.log statement that checks if highScore is equal to lives.



// 4. An example if statement is provided below. Uncomment and run the code in order to see what it does:
// if(score>highScore) {
//   console.log("New high score!")
// } else {
//   console.log("Better luck next time")
// }

// 5. Write a conditional statement like number 4 that checks if lives is larger than 0. If lives is larger than 0, print "continue playing" to the console. Otherwise, print game over. Change the value of lives to see if the other portion works!





// 6. You want to print out how many lives the user has everytime the "lose a life" button is clicked. Everytime the button is clicked, the amount of lives should decrease by 1. You want to print the number of lives if they still have more than 0 lives. Otherwise, you want to print out game over. 
var livesButton = document.querySelector("#livesButton");
var messageDiv = document.querySelector("#output");
livesButton.addEventListener("click", function(){
  // Place code for #6 inside this event listener.
  
   


  

})

// 7. We want to print out an emoji image when the mood button is clicked. If the mood button has been clicked less than 10 times, we want a happy emoji to print. Otherwise, print out the angry emoji for clicking too many times. The images are uploaded on the side.
var clicks = 0;
var moodButton = document.querySelector("#moodButton");
var imageDiv = document.querySelector("#imageDiv");

moodButton.addEventListener("click", function(){
  // Place code for #7 inside this event listener.
  




})