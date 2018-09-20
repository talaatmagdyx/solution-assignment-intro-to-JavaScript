/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
 rainbow.splice(2, 1); // remove 1 item at 2-index postion, return the deleted item
console.log(rainbow);
//var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
rainbow.splice(2,0,"Yellow","Green");
console.log(rainbow);
rainbow.splice(5,0,"Purple");
console.log(rainbow);
