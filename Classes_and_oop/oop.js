const user = {
    username: "vipul",
    logicalCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        //  console.log(this)

    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("vipul", 12, true)
const userTwo = new User("Kumar", 11, false)

console.log(userOne.constructor)
// console.log(userTwo)







