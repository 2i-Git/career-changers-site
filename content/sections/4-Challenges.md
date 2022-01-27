---
anchor: "Code Challenges"
header: "Code Challenges"
subheader:
lessons: [
    {
        header: "Pseudocode: like code but not",
        content: '
        As you start to encounter more and more complex code challenges, you will struggle to visualise a complete solution in your head.
        The best way to approach this is to put the problem onto the page, break the problem down into steps and then work on them one at a time.  


*Pseudocode* is when you write out each line of code, but in a language that makes sense to you. This means that you can fully engage with solving the problem without thinking about code syntax. You may even want to write the steps in plain English first and then rewrite as pseudocode.


Let’s take an example problem of building a medicine dosage calculator. Given a total dosage, and the amount of medicine per pill, write a function to return the number of pills to give to a patient.


```
javascript

// step 1: Write out in plain English (optional)

// declare a function that takes total dosage and dose/pill

//    divide the total by pill

//    return the result



// step 2: Write out in pseudocode

// function: (totalDosage, dosePerPill)

//    result = totalDosage / dosePerPill

//    return result


// step 3: Convert to JavaScript

const noPillsToGive = (totalDosage, dosePerPill) => {

   return totalDosage/dosePerPill

}


```

        '
    },
    {
        header: "Why console.log() is your best friend",
        content: '
        When writing code professionally, we will often use tools called *debuggers* to help us discover and fix *bugs*. Bugs are flaws in our coding which cause unexpected behaviour.  
        

        A debugger will pause the code at set points called *breakpoints* and show the developer what variables are being held in memory, and what values those variables are holding on to. They essentially allow the developer to look inside of the code.


In sandbox environments like Replit, or those that you find in online sandboxes, we rarely have access to fully featured debuggers, so we usually rely on print statements instead. Print statements like console.log() are an essential tool for quickly debugging your code as you write it. Here are some reasons that you may use console.log() in a code challenge:  

1.	To check that a block of code runs

2.	To check on the value of a variable as it moves through code



The below code contains some methods and syntaxes that you have not seen before, so don’t worry if you don’t completely understand them.


    **Challenge: there is a screening of a film at a cinema, and for each adult (>15) in a group, a child (<=5) gets in for free. Children cannot attend without at least one adult per group. Adult tickets are £10, children are £5. Write a function that takes in an array of ages for a group and returns a total price for tickets.**

```
javascript

const adultTix = 10

const childTix = 5


groupAges = [18, 55, 5, 3, 1]


const totalPrice = (group, adultPrice, childPrice) => {

  // sort “group” from high to low

  group.sort((a,b) => {

     return b-a

  })


  // console log to verify that the array is sorted

  console.log(group)


  // loop to remove one child ticket from the array if current is an adult.

  group.forEach( customer => {

        // if the current customer is over 15 AND (&&) the last customer in the array is five or under, then remove that customer

        if (customer > 15 && group[group.length-1] <= 5) {
      
           // console log to check that this block of code is being run

           console.log("This block is being run!")


           group.pop()

        }

     })


     // console log to check that the correct number of children have been removed

     console.log(group)


     // map to turn into money

     const tickets = group.map( customer => {

        // this is a shorthand way of writing if/else statements. Very handy for map statements. 

        //If the customer is a child, return 5, else return 10

        return (customer <= 5 ? 5 : 10)

     })


    //console.log to check that the new array has been correctly populated

    console.log(tickets) 


   // reduce to turn into one number 

   const totalPrice = tickets.reduce( (runningTotal, current) => {

      return runningTotal + current

      })


   return totalPrice

}

totalPrice(groupAges,adultTix,childTix)

```

>  Prints: 

```
plain

[ 55, 18, 5, 3, 1 ]  

 This block is being run!  

 This block is being run!  

 [ 55, 18, 5 ]  

 [ 10, 10, 5 ]  

 25

```

Using console.log() throughout has enabled us to see the processing step by step, even in an overly complex function like this.


TIP: make sure that you remove your print statements before presenting any code as finished. As much as it is a good skill to be able to debug, it looks cluttered and unprofessional to leave print statements lying around. In production code, printing to the console could even be a security risk!

        '
    },
    {
        header: "Coding challenge 1",
        content: '
        Now that you have seen a few simple coding challenges, we will present you some to try on your own. There are solutions available if you get stuck.


        **Challenge: Given an array, write a function which returns the array reversed. The function must work for any data type.**


```
plain

Example 1: [1,2,3,4,5,6,7,8,9,10] should return [10,9,8,7,6,5,4,3,2,1]

Example 2: [“I”,”like”,”green”,”eggs”,”and”,”ham”] should return [“ham”,”and”,”eggs”,”green”,”like”,”I”]

```

Possible solutions are available [here](https://replit.com/@LewisSaunders1/codingChallenge1#index.js)


        '
    },
    {
        header: "Coding challenge 2",
        content: '
        A shop wants a function to automatically find the item in stock which has the most capital tied up in stock (amount of stock * price) so that they can put that item on sale. 
        

        The function takes in an array of objects and outputs a single object.


Given data: 


```
plain

[

   {item: "Raspberry Pi 4b", price: 40, stock: 50},

   {item: "USB-C PSU", price: 15, stock: 200},

   {item: "Dell laptop", price: 400, stock: 5},

   {item: "FLIRC Pi4 case", price: 16, stock: 180},

]

```

Should return:

```
plain

{item: "USB-C PSU", price: 15, stock: 200}

```

Possible solutions are available [here](https://replit.com/@LewisSaunders1/codingChallenge2#index.js)

        ' 
    },
    {
        header: "Finding more code challenges",
        content: '

        Code challenges are really popular with developers of all levels, so there are lots out there to try!


[CodeWars]( https://www.codewars.com/) will scale up the challenge as you complete challenges, and it will show you how other people have approached the same problem. 


[Advent of Code]( https://adventofcode.com/) publishes new coding challenges leading up to Christmas and there are lots of forum threads of people taking the challenges further in new and unexpected ways! If you find that you learn best in a social/team setting, you can get involved with Hackathons! They run year-round and are a great opportunity to meet people and do some intense (but fun) upskilling.


TIP: A common pitfall for those that do coding challenges is the idea that a shorter answer is always better. In the real world, writing clean, easy to understand, well commented code is much more helpful to your colleagues than a wildly complex one-line solution. Save the one-liners for Code Wars!
        '
    }
]

---