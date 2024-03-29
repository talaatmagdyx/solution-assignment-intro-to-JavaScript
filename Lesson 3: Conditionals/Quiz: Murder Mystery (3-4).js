/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

/*
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
*/
// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
} else {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
}
if (solved) {
    console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
}