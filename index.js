// Code your solution in this file!
const distanceFromHqInBlocks = function (pickUpLocation){
    if (pickUpLocation >= 42){
        return pickUpLocation - 42;
    }else if (pickUpLocation < 42){
        return 42 - pickUpLocation;    
    }else{
        return "Invalid input"
    }
}

const distanceFromHqInFeet = function (pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

const distanceTravelledInFeet = function (start, destination){
    let distanceInFeet;
    if (start >= destination){
        distanceInFeet = (start - destination) * 264
    }else if (start < destination){
        distanceInFeet = (destination - start) * 264
    }else {
        return "invalid input"
    }
    return distanceInFeet;
}

const calculatesFarePrice = function (start, destination){
    let fare;
    if (distanceTravelledInFeet (start, destination) <= 400){
        return fare = 0;
    }else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return fare = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return fare = 25;
    }else {
        return 'cannot travel that far';
    }
}