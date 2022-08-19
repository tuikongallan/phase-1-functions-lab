
// distanceFromHqInBlocks
const scuberHq = 42;

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > 42) {
        return pickUp - scuberHq
    } else if (pickUp < 42) {
        return 42 - pickUp
    }
}
//distanceFromHqInFeet

function distanceFromHqInFeet(pickUp) {
    if (pickUp > 42) {
        return (pickUp - scuberHq)*264
    } else if (pickUp < 42) {
        return (42 - pickUp)*264
    }
}
// distanceTravelledInFeet

function distanceTravelledInFeet(start, destination) {
   if (start> destination) {
    return (start-destination)*264
   }
   else if (start<destination) {
    return (destination -start)*264
   }
  }

// calculatesFarePrice
  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet<= 400) {
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet-400)*0.02
    }
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }
    else if (distanceInFeet >2500) {
        return 'cannot travel that far'

    }
  }