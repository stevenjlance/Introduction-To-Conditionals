CONDITIONAL STATEMENTS
======================
![](https://media.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif) 

When playing a video game, how does the game know to print game over when you have 0 lives left? Programmers often need to decide if a condition is true or false so that our programs can excute a certain set of commands in response to this condition. We need one block of code to run IF live is larger than 0 and another block of code to run IF lives is equal to 0.

COMPARISON OPERATORS
-------------------
Comparison operators are used to test for `true` or `false`. Comparison operators are used in logical statements to determine equality or difference between variables or values. The following are used to compare two values in JavaScript.

Operation | Symbol|
------------ | -------------
Greater Than | `>` | 
Less Than | `<`|
Equal To | `==`|
Greater Than or Equal To | `>=`| 
Less Than or Equal To | `<=`|

For example, if we say `console.log(5 > 10)`, the console will print `false`. On the other hand if x has a value of 4 and we say `console.log(x == 4)`, the console will print `true` as the two values are the same.

CONDITIONAL STATEMENTS
---------------------
Comparison operators can be used in conditional statements to compare values and take action depending on the result. Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:
- Use `if` to specify a block of code to be executed, if a specified condition is `true`
- Use `else` to specify a block of code to be executed, if the same condition is `false`
- Use `else if` to specify a new condition to test, if the first condition is `false`

For example, let's say we wanted to test if a person is old enough to vote:

```javascript
var age = 12;
if(age < 18) {
console.log("Your are too young to vote");
}
```

We use an `if` statement to test if a given statement is true. In the example above age is less than 18, so the if statement evaluates to true. The `console.log` statement will excute as a result. For example, if age had a value of 22, then the `console.log` statement would not run because the `if` statement evaluated to false.

Let's say we wanted one message to print out if true and another to print out if false. In this case we use an `else` statement after our if statement. For example:
```javascript
var age = 22;
if(age < 18) {
  console.log("Your are too young to vote");
} else {
  console.log("You are old enough to vote!");
}
```

In this case, "You are old enough to vote" will print because the first statement evaluated to false, so the elese block of code will run.

TASKS FOR TODAY
---------------
1. Uncomment the line of code below of the comparrison operator and see what prints to the console.
2. Using #1 as an example, check if lives is less than the score. Print the result to the console.
3. Write a console.log statement that checks if highScore is equal to lives.
4. An example if statement is provided on `script.js` #4. Uncomment and run the code in order to see what it does
5. Write a conditional statement like number 4 that checks if lives is larger than 0. If lives is larger than 0, print "continue playing" to the console. Otherwise, print game over. Change the value of lives to see if the other portion works!
6. You want to print out how many lives the user has everytime the "lose a life" button is clicked. Everytime the button is clicked, the amount of lives should decrease by 1. You want to print the number of lives if they still have more than 0 lives. Otherwise, you want to print out game over. 
![](https://media.giphy.com/media/JKxR8cXk722wxV18e3/giphy.gif)
7. We want to print out an emoji image when the mood button is clicked. If the mood button has been clicked less than 10 times, we want a happy emoji to print. Otherwise, print out the angry emoji for clicking too many times. The images are uploaded on the side.  
![](https://media.giphy.com/media/ehfQ6hOyssHl3PegsP/giphy.gif)
