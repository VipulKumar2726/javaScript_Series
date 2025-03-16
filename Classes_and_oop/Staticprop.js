class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

//  static createId(){
//         return `123`
//     }
 createId(){
    return `123`
}
}

const vipul = new User("vipul")
console.log(vipul.createId())



class Teacher extends User {
    constructor(username, email) {
        super(username)
            this.email = email
        
    }
}

const iphone = new Teacher("iphone", "iphone@g.com")
console.log(iphone.createId())