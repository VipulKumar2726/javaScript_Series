// Array 

const myArr = [0, 1, 2, 3, 4];
const myHerose = ["vipul", "kumar"]

const myArr2 = new Array(1, 2, 3, 4);
//  console.log(myArr[1])


 //  Array methods

//  myArr.push(6)
//  console.log(myArr)

//  myArr.pop()
//  console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


 ///  slice, splice

//  console.log("A ", myArr)

//  const myn1 = myArr.slice(1, 3)

//  console.log(myn1)

//  console.log("B ", myArr)

//  const myn2 = myArr.splice(1, 3)
//  console.log("C ", myArr)

//  console.log(myn2)



//   ************************** Second lecture  **************

const marvel_herose = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]

marvel_herose.push(dc_heros)

// console.log(marvel_herose)
// console.log(marvel_herose[3][1])

// const allHeros = marvel_herose.concat(dc_heros);
// console.log(allHeros)

const all_new_heros = [...marvel_herose, ...dc_heros]

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)


// console.log(Array.isArray("vipul"))
// console.log(Array.from("vipul"))
// console.log(Array.from({name: "vipul"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))
