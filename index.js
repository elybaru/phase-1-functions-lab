
function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        return (pickup - 42)
    } else {
        return (42 - pickup)
    }
}


function distanceFromHqInFeet(pickup) {
    return (distanceFromHqInBlocks(pickup) * 264)
}


function distanceTravelledInFeet (start, end) {
    if (end >= start) {
        return ((end - start) * 264);
    } else {
        return ((start - end) * 264);
    }
}


function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) < 400) {
        return 0;  
    } else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000) {
        return ((distanceTravelledInFeet(start, end) -400) * .02); 
    } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start,end) < 2499) {
            return 25
    } else {
        return 'cannot travel that far';
    }

}