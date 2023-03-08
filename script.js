// Function starts
// Check if the number is prime
   // write a for loop starting at 2 && stopping at the number
   // check if our number-argument is divisible by i
// If it is, we add it to the array
// // .push() method?
// If not, go to the next number

// 4 => should not be added
// 5 => add to the array



const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0){
            return false
        }
    }
    return true
}
// console.log(Math.sqrt(2))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(5))
// console.log(isPrime(7))
// console.log(isPrime(12))
// console.log(isPrime(15))
// console.log(isPrime(19))

const printPrimes = (limit) => {
    // Initialize empty array
    const primeNums = []
    // Iterate over all numbers up to the limit
    for (let i = 2; i < limit; i++) {
        // Check if number is prime using previous isPrime function
        if(isPrime(i)){
            // If it is, push i into primeNums
            primeNums.push(i)
        }
    }
    return primeNums
}
console.log(printPrimes(11))
console.log(printPrimes(50))