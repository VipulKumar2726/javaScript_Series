//  singleton

//  object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "vipul",
    "full name": "Vipul Kumar",
     [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "vipul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vipul@chatgpt.com";
// Object.freeze(jsUser)
jsUser.email = "vipul@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js user")
}

jsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`)
}


// console.log(jsUser.greeting())
// console.log(jsUser.greeting)

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())



// const tinderUser = new Object()   // Singleton Object
const tinderUser = {}   //// Non  Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Vipul"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "vipul@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vipul",
            lastname: "kumar"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 1,
        email:"a@gmail.com"
    },

    {
        id: 1,
        email:"a@gmail.com"
    },
]


// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



//************ Object Destructuring**************** */

const course = {
    coursename: "js in hndi",
    price: "999",
    courseInstructor: "vipul"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)



