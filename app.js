console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (i = 1; i <= 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (i = 1; i <= 100; i++)
{
     if (i % 3 == 0 && i % 5 ==0)
     {
        console.log( i, 'FIZZBUZZ')
     }
     else if (i % 3 == 0)
     {
        console.log( i, 'FIZZ')
     }

     else if (i % 5 == 0)
     {
        console.log( i, 'BUZZ')
     }
     else 
     {
        console.log(i);
     }
}

// Exercise 3 Section
console.log("EXERCISE 3 Part One:\n==========\n");

// Part 1
let x = 1;
do {
    if (x % 2 !== 0){
        console.log(x);
    }
    x++;
} while (x < 100);

// Part 2
console.log("EXERCISE 3 Part Two:\n==========\n");
let n = 1;
do {
    if (n % 3 == 0 && n % 5 == 0){
        console.log(n, 'FIZZBUZZ');
    }
    else if (n % 3 ==0){
        console.log(n, 'FIZZ');
    }
    else if (n % 5 ==0){
        console.log(n, 'BUZZ');
    }
    else{
        console.log(n);
    }
    n++;
} while (n < 100);

//exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let m = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= m; i++)
{
   if (i == value){
       console.log(`${value} This is the exact value!`);
       break;
   }
   
   if (i == m){
    console.log('value not found');
   }
}

//exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= end; i++)
{
    let num = "";
    if (i % fizzDivisor == 0)
    {
        num += "FIZZ";
    }

    if (i % buzzDivisor == 0)
    {
        num += "BUZZ";
    }
    console.log(`${i} ${num}`);
}