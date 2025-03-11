function sayMyName() {
    console.log("V")
    console.log("I")
    console.log("p")
    console.log("u")
    console.log("l")

}

// sayMyName();


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
   
}

const result =  addTwoNumbers(1, 5)

// console.log("Result", result)

function loginUserMessage(username = "ravi") {
    if(!username){
console.log("Please enter a username")
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vipul"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "vipul",
    prices: 199
}

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

 }

//  handleObject(user)

handleObject({
    username: "kumar",
    prices: 299
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))


