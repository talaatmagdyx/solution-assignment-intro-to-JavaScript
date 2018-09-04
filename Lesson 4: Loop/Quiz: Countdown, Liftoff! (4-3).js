/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
 */
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
var num = 60 ;
while (num >= 0){
    switch (num) {
        case 50 :
            console.log(`Orbiter transfers from ground to internal power`);
            break;
        case  31 :
            console.log(`Ground launch sequencer is go for auto sequence start`);
            break;
        case  16 :
            console.log(`Activate launch pad sound suppression system`);
            break;
        case  10 :
            console.log(`Activate main engine hydrogen burnoff system`);
            break;
        case  6 :
            console.log(`Main engine start`);
            break;
        case  0 :
            console.log(`Solid rocket booster ignition and liftoff!`);
            break;
        default:
            console.log(`T-${num} seconds`);
    }
    num = num -1
}
/*
T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
 */
