
///   Maps   /////////////////

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map)

// for(const [key, value] of map) {
// //   console.log(key, ':-', value)
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value)
//   }


const myObject = {
    'js': 'javaScript',
    'cpp': 'c++',
    'rb': 'ruby',
    'swift': "swift by apple"
}

for(const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)

  }


const programming = ["js", "rb", "py"]

for(const key in programming) {
    // console.log(programming[key])
}



// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key)
// }


// for each loop


const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })


// coding.forEach( (item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)




// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName : "js"
    },
    {
        languageName: "java",
        languageFileName : "java"
    }
    , {
        languageName: "python",
        languageFileName : "py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName)
})



