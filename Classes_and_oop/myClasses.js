//   ES6


 class User {
    constructor(usernamem, email, password){
        this.usernamem = usernamem;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
     }

     changeUsernmae(){
        return `${this.usernamem.toUpperCase()}`
     }
 }

 const chai = new User("chai","chai@g.com","123")

 console.log(chai.encryptPassword());
 console.log(chai.changeUsernmae());


 // behind the scene


 function User(usernamem, email, password){
    this.usernamem = usernamem;
    this.email = email;
    this.password = password
}


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.usernamem.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername())
 

 