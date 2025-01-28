//  1)Multiplication Table

var n =3 ; 
for (let i =1;i<=10; i++)
     {
    console.log(n+" "+ i +" ="+(n*i));
    }

// ##############################
// 2)Number Guessing Game

    var guess = Math.round( Math.random()*10);
    var num = 2;
    if (num==guess)
        {
             console.log(guess);
        console.log("you guess it right");
        
    }
    else{
        console.log("wrong " + guess);
        
    }
 // ##############################
// 3) FizzBuzz Problem

for(let i=1;i<=50;i++)
{
    if (i%3==0 && i%5==0)
         {
            console.log("fizzbuzz");
            
        }
        else if(i%3==0)
            {
                console.log("fizz");  
            }
            else if(i%5==0)
                {
                    console.log("buzz");  
                }
                else{
                    console.log(i);
                    
                }
}
// ############################################################
// 4) Write a program to calculate the factorial of a number using loops and display messages based on its value. 
let num1 =5,fact=1;
while (num1>0)
 {
   fact = fact* (num1);
   num1--; 
}
console.log(fact);
// ############################################################
// 5)Prime Number Checker
// program to check if a number is prime or not
function isPrime(n) 
{
    if (n <= 1)
      return false;
      for (let i = 2; i < n; i++)
      if (n % i == 0)
        return false;
  
    return true;
}
  
  
  isPrime(11)? console.log("true"): console.log("false");
// ############################################################
// 6)Star Pattern

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}
// ############################################################
// 7)Palindrome Checker

function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(121)); // true
console.log(palindromeCheck(123)); // false
// ############################################################
// 8)  Count Vowels and Consonants
// program to count the number of vowels in a string

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
// ############################################################
// 9) Factorial Using while Loop

function fact(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}
console.log(fact(5));
// ############################################################
//10)  Fibonacci Sequence
// program to generate fibonacci series up to n terms

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
// ############################################################
