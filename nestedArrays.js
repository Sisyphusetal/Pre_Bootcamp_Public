//Using the Manhattan Distance Formula as a basis for optimal truck location
//optimized format for this is available but currently beyond my programming ability

function nestedArrays(arr) {
    var sumsX=0;
    var sumsY=0;
    var customerCount=arr.length;

    //Total the sum of the x and y coordiantes individually
    for (var i=0; i<customerCount; i++) {
        sumsX=sumsX+arr[i][0];
       sumsY=sumsY+arr[i][1];
    }
    /*Finding the median of coordiantes, which is the mean 
    since each array only consists of two values*/
    var meanX = sumsX/customerCount;
    var meanY = sumsY/customerCount;

    //Round coordinates
    var finalX = Math.round(meanX);
    var finalY = Math.round(meanY);
    var finalCoordinates = [finalX, finalY];

    return finalCoordinates;
}

console.log(nestedArrays([[2,3], [14,19], [23,21]]));

console.log(nestedArrays([[22,9], [5,15], [1,-1]]));

console.log(nestedArrays([[-14,-6], [22,22], [-3,21]]));