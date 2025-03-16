// let myName = "Vipul    "
// let myChannel = "Edu"
// console.log(myName.trueLength)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power  is ${this.spiderman}`);
    }
}


Object.prototype.vipul = function(){
    // console.log(`Vipul is present in all objects`)
}

Array.prototype.heyVipul = function(){
    // console.log(`Vipul say hello.`)
}
// heroPower.vipul()
myHeros.vipul()
myHeros.heyVipul()
// heroPower.heyVipul()


//    inheritance


const User = {
     name: "vipul",
     email: "vipul@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "VipulKumar    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`This length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Ram".trueLength()
"Vipin".trueLength()