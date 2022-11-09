//One manhattan block 264 feet
const blockInFeet = 264;
//hq is on 42nd street
const hq = 42;
//customer
let customerBlocks;
let customerFeet;
function distanceFromHqInBlocks(customer){
    if (customer >= hq){
        customerBlocks = (customer - hq);
    } else {
        customerBlocks = (hq - customer);
    }
    return customerBlocks;
};
customerBlocks = distanceFromHqInBlocks(customer);

/*function distanceFromHqInFeet(){
    return customerBlocks * blockInFeet;
   ;
}
distanceFromHqInFeet();
*/

function distanceFromHqInFeet(customer){
    if (customer >= hq){
        customerFeet = ((customer - hq) * blockInFeet);
    } else {
        customerFeet = ((hq - customer) * blockInFeet);
    }
    return customerFeet;
};
let distanceTravelled;
function distanceTravelledInFeet (pickUp, dropOff){
    if (dropOff > pickUp){
        distanceTravelled = (dropOff - pickUp)*blockInFeet;
    } else if (dropOff < pickUp){
        distanceTravelled = (pickUp - dropOff)*blockInFeet;
    }
    return distanceTravelled;
}

let farePrice;
function calculatesFarePrice(start, destination){
    if (destination > start){
        distanceTravelled = (destination - start)*blockInFeet;
    } else if (destination < start){
        distanceTravelled = (start - destination)*blockInFeet;
    };
    if (distanceTravelled < 400){
        farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000){
        farePrice = ((distanceTravelled - 400)*0.02);
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500){
        farePrice = 25;
    } else {
        return 'cannot travel that far';
    };
    return farePrice;
}