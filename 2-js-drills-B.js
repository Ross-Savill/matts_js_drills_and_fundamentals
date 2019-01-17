/* The next set of drills are a bit more difficult. 
I know that sometimes it might be hard to work out what is meant by the question, 
but I ask that you stay with it and do your best to piece it apart 
- sometimes it is hard to express these questions without some confusion. 

I am happy to give answers to some of the questions if that will help with the understanding so that you can move forward. 
Where a question asks for a log to screen, the simplest thing will be to log the name of the function. 
Most times in these questions it is not what the function does that will be important, 
but rather how that function sits within the object, or even within the other function.*/

// 1. Define an object that has two keys. 
// One will have the value of a string, and the other a function 
// (and this function can simply log its own name to screen).

student = {
    age: "35",
    cup: function() {
        console.log("cup ran")
    }
}

// 2. Log the string to screen.

console.log(student.age)

// 3. Log the entire function to screen.

console.log(student)

// 4. Invoke the function within the object. 

student.cup()

/* 5. Define an object that has three keys, and each key has the value of an anonymous function. 
In each function log something to screen (different in each function). */

objectQuestion5 = {
    stringMaker: function() {
        console.log("String")
    }, 
    numberMaker: function() {
        console.log(5)
    },
    thirdMaker: function() {
        console.log("third")
    }
}

// 6. Call each function (through the object).

objectQuestion5.stringMaker()
objectQuestion5.numberMaker()
objectQuestion5.thirdMaker()

/* 7. Make a function that returns an object that has two keys, one key with a string value,
and the other that has an anonymous function as its value. */

objectQuestion7 = {
    stringMaker: "abcdefg",
    anonFunc: function() {
        return "This is the anonymous value"
    }
}

// 8. Log to screen the result of invoking this function.

function objectReturner(object) {
    console.log(object)
}

objectReturner(objectQuestion7)

// 9. Work out how to log to screen the value of the returned object’s string.

objectReturner(objectQuestion7.stringMaker.length)

/* 10. Invoke the returned object’s function (via the first function - you will need to return the object, 
and then call the function within the returned object). */

objectReturner(objectQuestion7.anonFunc())

/* 11. Write a function that takes a number and a function as an argument. 
Inside this function perform three simple calculations with the given number (the first argument), 
and then pass the final result to the function that is passed as the second argument. */

function Question11(num, func) {
    const answerOne = num * 2
    const answerTwo = answerOne * 3
    const finalResult = answerTwo / 2
    func(finalResult)
}

/*  12. Call this function three times with different numbers, and a different anonymous callback function each time 
(perhaps each time the callback doing a different simple calculation).*/

const partOne = Question11(2, function(finalNumber) {
    console.log(finalNumber / 2)
})
const partTwo = Question11(2, function(finalNumber) {
    console.log(finalNumber * 2)
})
const partThree = Question11(2, function(finalNumber) {
    console.log(finalNumber + 2)
})

// 13. Now write two functions that take a number as an argument, and do some very simple calculation.

function functionOne(num) {
    console.log(num * 2)
}

function functionTwo(num) {
    console.log(num * 3)
}

/* 14. Invoke the function from 11 twice, each time with a different number argument, 
and using each of the two functions that you just defined in 13 (one in each invocation). */

Question11(5, functionOne)
Question11(10, functionTwo)

// 15. Define three very basic functions that take no arguments and that simply console out the name of the function. 

function BasicOne() {
    console.log("This is function BasicOne")
}
function BasicTwo() {
    console.log("This is function BasicTwo")
}
function BasicThree() {
    console.log("This is function BasicThree")
}

// 16. Place each of these functions into an array (do not call the functions).

const funcArray = [BasicOne, BasicTwo, BasicThree]

// 17. Loop through this array and invoke each of the functions in turn.

 funcArray.forEach(function(func){
    func()
 })

/* 18. Define a function (funcReturnsFunc) that returns an anonymous function. 
If you like you can have the funcReturnsFunc log out something before it returns the function. 
The returned function can just log out a simple message to inform you it ran. */

function funcReturnsFunc() {
    console.log("returning anon func now")
    return function() {
        console.log("words")
        return true
    }
}

// 19. Invoke funcReturnsFunc, and store the result in a const.

const question19Result = funcReturnsFunc()();

// 20. Using that const, run the returned function.

console.log(question19Result);

// 21. Now do the same thing in one line: run funcReturnsFunc, and then run the anonymous function result immediately.

funcReturnsFunc()()


