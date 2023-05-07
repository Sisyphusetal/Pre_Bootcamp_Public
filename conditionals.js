//time any number 1-12
//day Monday-Sunday
//timeOfDay am or pm

function studentRewards(time, day, timeOfDay) {
    var latte = "Have a latte!";
    var hotChoc = "Have a hot chocolate!";
    var iceCream = "Have some ice cream!";
    var cookies = "Have some cookies!";
    var candy = "Have some candy!";
    var tea = "Have some delicious tea!";
    var cake = "And she said 'Let them eat cake.'";
    var sleep = "Don't be silly, just go to sleep!";
    //The following variables are created specifically for Feature 3
    var arr = [iceCream, cookies, candy];
    var arr2 = [hotChoc, tea, cake];
    var randIndex = Math.floor(Math.random()*arr.length);
    var randIndex2 = Math.floor(Math.random()*arr2.length);
    var randChoice = arr[randIndex];
    var randChoice2 = arr2[randIndex2];

    if (time>6 && time<10 && timeOfDay=="am") {
        console.log(latte);
    }
    else if (time>=10 && time<=12 && timeOfDay=="am") {
        console.log(hotChoc);
    }
    //Following else-if is Feature 2 (Feature 1 also makes an appearance)
    else if (time>=3 && time<=6 && timeOfDay=="pm") {
        if(time%2==0) {
            console.log(randChoice);
            //Feature 1 makes an appearance here due to iceCream
            if (day=="Wednesday" && randChoice==iceCream) {
                console.log("And make it strawberry!");
            }
            else if (day!="Wednesday" && randChoice==iceCream) {
                console.log("And make it vanilla!");
            }
        }
        else {
            console.log(randChoice2);
        }
    }
    //Following else if contains Feature 1
    else if (time>6 && time<=10 && timeOfDay=="pm") {
        console.log(iceCream);
        if (day=="Wednesday") {
            console.log("And make it strawberry!");
        }
        else {
            console.log("And make it vanilla!");
        }
    }
    else if (time>10 && timeOfDay=="pm") {
        console.log(sleep);
    }
    else {
        console.log("Bro, what are you doing with you life?");
    }
    
}

studentRewards(5,"Tuesday","pm");