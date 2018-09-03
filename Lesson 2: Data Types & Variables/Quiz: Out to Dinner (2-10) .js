/*
Directions:
Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.

Hint: 15% in decimal form is written as 0.15_._
 */

/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here
var bill = 10.25 + 3.99 + 7.15 ;
var tip = bill * 0.15 ;
var total = bill + tip ;
//toFixed use to round decimal number
console.log(total.toFixed(2)) ;