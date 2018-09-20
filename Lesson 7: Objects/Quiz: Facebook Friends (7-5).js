/*
Directions:
Create an object called facebookProfile. The object should have 3 properties:
your name
the number of friends you have, and
an array of messagess you've posted (as strings)
The object should also have 4 methods:
postmessages(messages) - adds a new messages string to the array
deletemessages(index) - removes the messages corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */
var facebookProfile = {
    name: "first user",
    friends: 2,
    messages: ["hello", "no ", "know"],
    postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend(){
        facebookProfile.friends +=1;
    },
    removeFriend() {
        facebookProfile.friends = facebookProfile.friends -1;
    }
};
