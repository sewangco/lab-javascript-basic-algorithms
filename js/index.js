// Iteration 1: Names and Input
let hacker1 = 'James'
let hacker2 = 'Stephen'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }
  
// Iteration 3: Loops

let capitalizedName = ''
for (let i=0; i < hacker1.length; i++){
  capitalizedName += hacker1[i].toUpperCase() + " ";
}

let reversedName = ''
for (let i=hacker2.length -1 ; i >=0 ; i--){
  reversedName += hacker2[i]
}

if (hacker1.localeCompare(hacker2)=== -1){
    console.log(`The driver's name goes first.`)
  } else if (hacker1.localeCompare(hacker2)=== 1){
    console.log(`Yo, the navigator goes first definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }
  