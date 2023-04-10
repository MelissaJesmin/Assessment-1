///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/
//mon,tues,wed,thurs,fri,sat,sun
const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//creating variables to store the total of each apple acres
let fujiAcresTotal = 0
let galaAcresTotal = 0
let pinkAcresTotal = 0
let totalAcres = 0

//Creating a for loop to loop through each type of apple arrays for acres
for(let i = 0; i < fujiAcres.length; i++) {
    //adding the current value of i, to the stored value
    fujiAcresTotal += fujiAcres[i]
}
for(let i = 0; i < galaAcres.length; i++) {
    galaAcresTotal += galaAcres[i]
}
for(let i = 0; i < pinkAcres.length; i++) {
    pinkAcresTotal += pinkAcres[i]
}

//adding the total of each apple acres together 
totalAcres = fujiAcresTotal + galaAcresTotal + pinkAcresTotal
console.log(`total number of acres picked for the entire week: ${totalAcres}`)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = 0;
//adding up the length of each apple acres array in order to divide it with total acres to get the average 
averageDailyAcres = totalAcres / (fujiAcres.length + galaAcres.length + pinkAcres.length) 
console.log(`Average number of acres picked per day: ${averageDailyAcres}`)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
//Code will continue as long as acresLeft is not 0 or less
while (acresLeft > 0) {
    days+= 1
    acresLeft -= averageDailyAcres
}
console.log(`Days of work left: ${days}`)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//creating variables to store copy of the apple acres arrays
let fujiAcresCopy = [];
let galaAcresCopy = [];
let pinkAcresCopy = [];

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//using slice to copy the acres in order to not modify the orignal arrays
fujiAcresCopy = fujiAcres.slice()
galaAcresCopy = galaAcres.slice()
pinkAcresCopy = pinkAcres.slice()

//loop through the copies created 
for(let i = 0; i < fujiAcresCopy.length; i++) {
    //using push to store the values in order 
    //multiplying the value of i with 6.5 since each acre yields 6.5 tons of apples
    fujiTons.push(fujiAcresCopy[i] * 6.5)
}
for(let i = 0; i < galaAcresCopy.length; i++) {
    galaTons.push( galaAcresCopy[i] * 6.5)
}
for(let i = 0; i < pinkAcresCopy.length; i++) {
   pinkTons.push(pinkAcresCopy[i] * 6.5)
}
console.log(`Fuji Tons: ${fujiTons}\n`, `Gala Tons: ${galaTons}\n`, `Pink Tons: ${pinkTons}`)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.

*/

// CODE HERE 

 let fujiPounds = 0;
 let galaPounds = 0;
 let pinkPounds = 0;

 //creating variables to store the total amount of each apple tons
 let fujiTonsTotal = 0;
 let galaTonsTotal = 0;
 let pinkTonsTotal = 0;

//loop through each apple tons 
 for(let i = 0; i < fujiTons.length; i++) {
    //add value of i with the stored value
    fujiTonsTotal += fujiTons[i]
}

for(let i = 0; i < galaTons.length; i++) {
  
    galaTonsTotal += galaTons[i]
}

for(let i = 0; i < pinkTons.length; i++) {
 
   pinkTonsTotal += pinkTons[i]
}
//each ton = 2000 pounds so, 2000 x total of tons for each apple
fujiPounds = fujiTonsTotal * 2000;
galaPounds = galaTonsTotal * 2000;
pinkPounds = pinkTonsTotal * 2000;

console.log(`Fuji Tons Total: ${fujiTonsTotal}\n`, `Gala Tons Total: ${galaTonsTotal}\n`, `Pink Tons Total: ${pinkTonsTotal}`)

console.log(`Fuji Pound: ${fujiPounds}\n`, `Gala Pound: ${galaPounds}\n`, `Pink Pound: ${pinkPounds}`)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 

    const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

*/

// CODE HERE
//Since we have the price per pound and the pounds of each apples we can multiply them to get the profit
 let fujiProfit = (fujiPrice * fujiPounds) ; 
 let galaProfit = (galaPrice * galaPounds) ; 
 let pinkProfit = (pinkPrice * pinkPounds) ; 

 console.log(`Fuji Profit: ${fujiProfit}\n`, `Gala Profit: ${galaProfit}\n`, `Pink Profit: ${pinkProfit}`)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//add all the profits together in order to get the total
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`Total Profit: ${totalProfit}`)
