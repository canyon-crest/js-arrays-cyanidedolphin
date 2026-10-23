let colors = ['red', 'green', 'blue']
for (let i = 0; i < 3; i++) {
    console.log(`Color: ${colors[i]}`)
}
let numbers = []
let yourString = ""
let sum = 0
let count = 0
let largest = numbers[0]

for (let i = 0; i < 5; i++) {
    numbers.push(parseFloat(prompt(`Enter Number ${i+1}`)))
}

for (let i = 0; i < numbers.length; i++) {
    yourString += numbers[i]
    sum += numbers[i]
    if (i < numbers.length - 1) {
        yourString += ", "
    }
    if (numbers[i] % 2 === 0) {
        count++
    }
    if (numbers[i] > largest) {
        largest = numbers[i]
    } 
}
  
console.log(`Numbers: ${yourString}`)
console.log(`Sum: ${sum}`)
console.log(`Average: ${sum / numbers.length}`)
console.log(`Even count: ${count}`)
console.log(`Largest: ${largest}`)
