const user = {
    username: "vipul",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)

// function chai() {
    // let username = "vipul"
    // console.log(this.username)
// }

// chai()


// const chai = function () {
//     let username = "vipul"
//     console.log(this.username)

// }


// const chai =  () => {
//     let username = "vipul"
//     console.log(this)

// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   ///  explicit return
// }
// const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "vipul"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
