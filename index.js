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
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return fare = 0;
    }else if (distance > 400 && distance <= 2000){
        return fare = (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return fare = 25;
    }else {
        return 'cannot travel that far';
    }
}