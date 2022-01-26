---
anchor: "Basics"
header: "write your first code"
subheader: "Over the next six lessons, you'll learn everything you need to start tackling code challenges"
lessons: [
    {
        header: "Lesson 1: JavaScript and Node",
        content: "

Throughout this guide, we will be working in JavaScript. Why JavaScript? Because it is used everywhere! Javascript is used in modern web frameworks like React (created and used by Meta/Facebook) and Vue (used by Netflix and others), it is used to script tests in frameworks like Cypress and Postman, it can even be used to create art and visuals using libraries like three.js and p5.js. In fact, according to PluralSight, it is the number one most learned technology on their platform.


Another great reason to learn JavaScript is that it is a comparatively beginner-friendly language: it is reasonably easy to read, has a forgiving syntax, and a lot of the more complex functionality is abstracted into nice, easy to use methods.


While JavaScript may look pretty “computerish”, it is in fact much closer to English than anything that a computer can understand. So, we need compilers and translators to facilitate running of our code. Node.js is the runtime most used to achieve this in JavaScript. You can install Node to your device and try writing and running some JavaScript locally, but for the purpose of this guide we recommend using a sandbox like [Replit](replit.com). Replit is a free, in-browser development platform where you can quickly spin up a Node environment and start coding. Sandboxes like replit are great, because they are safe environments where you cannot do any damage. If the code freezes up, you can always just close the tab and open a new one.


The other advantage is that you will not have to use the command line to install and run software like you would if you were learning on your computer. The command line (usually command prompt on Windows, terminal on MacOS) is a way of controlling your computer using text commands. It is incredibly useful, and we will touch on it in a later chapter but for now save yourself the hassle and use a sandbox.


[MAY NEED TO INCLUDE A QUICKSTART GUIDE FOR REPLIT, MAYBE ON ANOTHER PAGE]


The best way to learn to code is by doing, so for best results you will want to put this site side-by-side with a blank Node repl and follow along with the lessons. If you find that you’re curious about something, follow that curiosity! Change the code, break it and see if you can fix it again. That is a great way to develop your understanding. 


#### links to lesson repls

If you follow along with the lessons you should end with a repl just like these ones. These are just provided for reference.


[lesson 2](https://replit.com/@LewisSaunders1/lesson2#index.js)/n

[lesson 3](https://replit.com/@LewisSaunders1/lesson3#index.js)\n

[lesson 4](https://replit.com/@LewisSaunders1/lesson4#index.js)\n

[lesson 5](https://replit.com/@LewisSaunders1/lesson5#index.js)

[lesson 6](https://replit.com/@LewisSaunders1/lesson6#index.js) "
    },
    {
        header: "Lesson 2: Variables, print statements and comments",
        content: "
        
    Let’s jump straight into some code. Type this into your repl and hit “run”.


    ```
    javascript

    let myName = 'Lewis'

    console.log(myName)

    ```


    Congratulations! You just ran some code. Some things to note about this code:

    * We declared a variable using “let”, gave it a name of “myName” and gave it a value of “Lewis”.

    * We only need to use let when first declaring the variable, after that we can refer to it by its name.

    * We then printed the variable called myName to the console. The console log shows the value of myName.


    Try changing “Lewis” to your name and running the code again
        
        
        
    ### Variables: 

    Variables are at the heart of coding. We use them to hold onto values while the code runs, and this enables us to do all sorts of interesting things. A very important aspect of variables is in the name, it is variable, meaning that it can be changed. This is perfect for a script where we want to keep track of a value as it changes, such as a tally:


    ```
    javascript

    // say we have a count of people entering a venue

        let tally = 0

        console.log(tally)


        // and a new customer comes along, so we increment the tally

        tally = tally + 1 // tally now equals itself plus one

        console.log(tally)


        // and another customer

        tally += 1 // this is another way of writing the above

        console.log(tally)

        ```

        You can see that we use the same variable throughout, and just vary its value. This is something that you will find yourself doing a lot!


        You will also see some sections of this code which are written in English and with a “//” at the front. These are called comments. Comments are designed to make code readable at a glance, and it is a good idea to include plenty of them in any code challenge which will be read by interviewers.



        ### Constants:

        The downside of variables is that they are sometimes too easy to change! So what if you want to hold onto a value that will not change during runtime? We would use a constant instead. Constants are declared just like variables, except that we use const instead of let.

        ```
        javascript

        const iAm = 'Douglas'

        console.log(iAm)


        // here, I am attempting to change the value of iAm to 'Stephen'

        iAm = 'Stephen'

        // but, it causes an error, because iAm is a constant

       console.log(iAm)

        ```



        TIP: Being sure to use a constant rather than a variable when appropriate will look good on a code challenge, as they make code less prone to bugs.


        TIP: In javascript, you can also declare a variable using 'var'. This is an older style that still pops up now and then in code, but is generally discouraged as it can be accessed anywhere in the code ('globally scoped'), as opposed to 'let' which can only be referred to from the block of code in which it is declared ('block scoped'). This article covers scope in more detail and with examples.
        "
    },
    {
        header: "Lesson 3: Data types, operators, and string concatenation",
        content: '

### Data Types:

As you may have already noticed, a variable is not confined to only being text, or a number. Variables can actually hold pretty much any value that you hand them, but we will get to that later. To start with, we will discuss some of JavaScript’s primitive data types:

#### Number:

Numbers in JavaScript can be either integers (aka whole numbers) or floating-point numbers (aka decimal numbers, for example 4.54). This is not always the case in all languages. Numbers can also be one of special types such as NaN (not a number), or +Infinity or -Infinity.


```
javascript

// examples of numbers

const age = 21

const grade = 67.5

const schoolName = NaN

```

#### String:

Strings are text assigned to a variable. They can be a letter, a word, a space, or the entire text of Moby Dick. When assigning a string to a variable, you need to surround it with quotes (“”) so that JavaScript interprets it as a string.


```
javascript

// examples of strings

const name = "Bob"

const species = "sheep dog"

const space = " "

```

#### Boolean:

Boolean variables have only two possible states: true or false. Remember that in JavaScript true and false are not capitalised.

```
javascript

// examples of booleans

const on = true

const off = false

```

Some other data types that you might come across (usually when things go wrong):


#### Null:

Null represents the intentional absence of value. Some operations will return null if unsuccessful so you can actually check for a null result in your code.

#### Undefined:

Undefined is different from null in that it represents a variable that has not yet been assigned a value. Constants cannot be undefined.


```
javascript

// examples of null and undefined

let nullExample = null

let noValue

console.log(noValue) // will return undefined

```


### Operators:

Operators are used to add, subtract, multiply and divide numbers. You may not be so familiar with modulo: this operator divides the numbers and returns the remainder as an integer (for example 17 % 5 would return 2). This is useful for checking that a number is divisible by another number.


```
javascript

// setting up some numbers to operate on

const a = 10

const b = 6


// addition

const sum = a + b

console.log(sum)


// subtraction

const sub = a - b

console.log(sub)


// multiplication

const mult = a * b

console.log(mult)


// division

const div = a / b

console.log(div)


// modulo

const mod = a % b

console.log(mod)

```


### String concatenation and string length:

You can also use the addition operator (+) with strings, although it has a slightly different effect. This is called concatenation.


```
javascript

// string concatenation

const firstName = "Homer"

const lastName = "Simpson"

console.log(firstName + lastName)

```

>prints: “HomerSimpson”


As you can see, the two strings were added together, but there is a space missing. A common trick when concatenating strings is to also concatenate additional spaces.

```
javascript

// adding in spaces

console.log(firstName + " " + lastName)

```

>prints: “Homer Simpson”


A property of strings that you may often use is the length of the string:

```
javascript

// string length

console.log(firstName + " is a name with "+ firstName.length + " letters.")

```

>prints: Homer is a name with 5 letters.


TIP: The length property can also be used with data collections such as arrays and objects. More about those in another lesson

'
    },
    {
        header: "Lesson 4: Basic functions and principles for using them",
        content: '

        A *function* is a self-contained section of code which is then *called* to run when it is needed. Imagine that we have a programme where we need to perform a task over and over. We could sit and copy and paste the code to run that task wherever we need, or we could define the function once, and call it when needed, keeping our code clean and simple to maintain.


Functions are incredibly important and useful, but are often a little misunderstood by beginners, so we will cover a little of the principles of writing good functions, as well as how to write one.


```
javascript

// a simple function that takes in two numbers, and multiplies them together

function multiplier (number1, number2) { 

   return number1 * number2  

}


// calling the function

const result1 = multiplier(2,4)

console.log(result1)

```

in this example:

*	We are defining the function using the “function” keyword and giving it a name of “multiplier”

*	“number1” and “number2” are parameters. We use parameters as placeholders for whatever data we pass into the function when we call it. You can think of parameters as the function’s input.

*	We return the results of multiplying number1 and number2 together. Return statements are very important, as they pass results back out of the function so that they can be used.

*	When we call the function, we are passing in two numbers to be multiplied. The data that you pass in is referred to as an argument.

*	In this case, we are assigning the output of the function to a constant, but we could also just place it inside of the console.log().


There are a few principles to stick to when writing functions:


##### 1.	Functions should be reusable


The biggest advantage of writing a function is that it can be reused over and over, without having to write code for everything that you want to do.


```
javascript

// An example of a function with poor reusability

function divider (number1){  

   return number1 / 7

}

```

This is an example of a function with poor reusability because we can only use it to divide numbers by 7. If we want to divide by anything else, we would have to write a whole other function


##### 2.	A function should cover a single task


As functions get to be more complex, they can become long, hard to read and less reusable. Fortunately, functions can be called from within other functions, which means that you can delegate complex tasks to other helper functions.


```
javascript

// an example of a function which calls other (imaginary) functions from within

function takeCardPayment(cardNumber, price, shoppingCart){

   const priceWithVat = calculatePricePlusVat(price)

   const validated =  validateCardWithBank(cardNumber)

   if (validated === true) {

      takePayment(cardNumber, priceWithVat)

      removeFromStock(shoppingCart)

   }

}

```

##### 3.	Function names should be descriptive


Part of the point of a function is abstraction, meaning that when we call a function, we don’t need to know the inner workings of it, just what goes in and comes out. A short, descriptive name helps with this. If you are struggling to name your function, it may be performing too many tasks. In the example above, we can’t see how the helper functions perform their tasks, but we can take a good guess at the results from the names.

        '
    },
    {
        header: "Lesson 5: Arrays, Objects and methods",
        content: '
        We have already looked at some of the basic data types such as numbers and strings, but what if we want to collect several strings or numbers together to do something with them? To do that, we use arrays and Objects. These will often have different names in other languages, but they generally work the same.


### Arrays:

Arrays are essentially a list of elements that be all of the same type, or of different types. Arrays can also contain other arrays and objects. This is called *nesting* arrays.


```
javascript

// simple arrays

const fruits = ["apple", "orange", "banana"]

const mixup = [24, "porridge", false]


// individual values within arrays can be accessed by their index, which starts from 0, not 1.

console.log(fruits[0])

console.log(fruits[2])

```

> prints: "apple" and "banana"


```
javascript

// adding a new value to the end of an array

fruits.push("dragonfruit")

console.log(fruits)

```

> prints: ["apple","orange","banana","dragonfruit"]


```
javascript

// removing a value from the end of an array

fruits.pop()

console.log(fruits)

```

> prints: ["apple","orange","banana"]

```
javascript

// removing a value from the front of an array

fruits.shift()

console.log(fruits)

```

> prints: ["orange","banana"]

```
javascript

// adding a value to the front of an array

fruits.unshift("fig")

console.log(fruits)

```

> prints: ["fig","orange","banana"]

```
javascript

// the index of a value can be found using indexOf

const pos = fruits.indexOf("orange")

// we can then use splice to remove the item at the found position. 

// The first argument tells splice where to start removing elements, and the second tells how many elements to remove

const shoppingBasket = fruits.splice(pos,1)

console.log(shoppingBasket)

```

> prints: ["fig","banana"]


Tip: .pop() and .shift() both return the removed value. If you want to store this value and use it elsewhere, you can assign it to a variable like this:

```
javascript

const removedFruit = fruits.pop()

```

### Objects:

Objects are similar to arrays in that they are collections of elements. The issue with arrays is that they can only be accessed by an index, and their order is not strictly guaranteed. Objects are different because they use key and value pairs to arrange information. You can think of the key as the label that be used to look up the value. Similar to arrays, the value can be data type, including nested arrays and objects. This allows us to construct and access complex data structures.

```
javascript

const car = {brand:"Honda", model:"Jazz", colour:"orange"}


// accessing a value using the key (both formats work)

console.log(car["model"])

console.log(car.brand)

```

> prints "Jazz" and "Honda"


```
javascript

// objects can also be defined across several lines

const bike = {
    
   brand: "Raleigh",

   model: "Randonneur"

}


// new data can be added to the objects like this

bike["colour"] = "metallic blue"

bike.gears = "3x8"

console.log(bike)

```

> prints: {

>  brand: "Raleigh",

>  model: "Randonneur",

>  colour: "metallic blue",

>  gears: "3x8"

> }

```
javascript

// should you need to delete a key/value pair

delete bike.gears

console.log(bike)

```

> prints: "{ brand: "Raleigh", model: "Randonneur", colour: "metallic blue" }"

```
javascript

// example of nested objects/arrays

// this is the sort of thing you may encounter when working with APIs

const zoo = {

   name: "Edinburgh Zoo",

   animals: [

      {

         id: 1,

         name: "Tom",

         species: "Tiger"

      },

      {

         id: 2,

         name: "Jerry",

         species: "Capybara"

      },

      {

         id: 3,

         name: "Sheryl",

         species: "Tarantula"

      }

      ]

}


// to access the info, we "drill down" one layer at a time

console.log(zoo.name)

console.log(zoo.animals[1].name)

console.log(zoo["animals"][2]["species"])


```

> Prints: "Edinburgh Zoo", "Jerry" and "Tarantula"


For an in depth guide to working with Objects, the [MDN guide] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) is an excellent resource 

        '
    },
    {
        header: "Lesson 6: Loops, ifs, and Comparators",
        content: '
        
Very often, we will want to take one of our data structures and apply some kind processing to it. It may be that we want to sort through and find a certain value, or we may want to take each piece of data and multiply it by a number. To iterate through these structures automatically, we use loops. 



In this lesson we will also introduce if statements, which we often use with loops.
A very common situation when iterating through a data structure is that we want to work on a piece of data conditionally, in these cases we will use an if statement to assert whether something fits a condition, and if so, we will then run a block of code. If the condition is false, then we skip over the block of code. We can also add an else statement to offer an alternative block of code in the case of the if returning false.



```
javascript

// if and else statements

const x = 1

if (x === 1) {

         console.log("this will run if x equals 1")

      } else {

         console.log("this will run if x does not equal 1")

      }

```


We have two main types of loops in JavaScript: For and While loops. 


A while loop will repeat for as long as a condition remains true. These are often used to set up loops which wait for a condition to change, such as waiting for a keypress.


```
javascript

// while loops

while (true) {
    
   const input = prompt("press q to exit: ")

   if (input == "q"){

      break

   }

}

```


For loops will run for a predefined length. This is either defined manually in an older-style for loop, or is defined by the length of the array or object in the case of more modern for in and for of loops.


```
javascript

// traditional style for loop

for (let i=0; i<10; i++) {

   console.log("I am a counting machine: "+(i+1))

}


// let i=0 - sets up a counter

//  i<10 - sets the end condition

//  i++ - increments the counter on every iteration. Could also be i-- to count down




// for in loop - specific to objects and arrays

const guitar = {

   brand: "Fender",

   model: "Telecaster",

   finish: "Sunburst"

}


for (property in guitar) {

   console.log("the "+ property + " of this guitar is: " + guitar[property])

}


// for of loop - can be used for any iterable such as arrays, strings and other types that you might not see often


const numbers = [13,25,76,99,22,86,247]

const counter = {

   odd: 0,

   even: 0

}


// using the loop to find if numbers are odd or oven

for (number of numbers) {

   // this line checks to see if the number can be divided by two without a remainder

   if (number % 2 === 0) {

      // if the IF resolves to true, then this line will run

      counter.even += 1

   } else {

      // if the IF is falsem then this line will run instead

      counter.odd += 1

   }

}

```

### Comparators:

To make our if statement work, we use comparators. In the example above we used a simple equals (“==”) comparator, but there are several others that we can use.


```
plain

// comparators


// equals

// ==

// given that x = 3

// x == 8 will resolve as false 

// x == 3 will resolve as true  

// x == "3" will resolve as true


// strongly equals (has the same value and data type)

// ===

// given that x = 3

// x === 8 will resolve as  false 

// x === 3  will resolve as true  

// x === "3" will resolve as false


// does not equal/does not strongly equal

// !=/!==

// Given that x=7

// x != 9 will resolve as true

// x !== 7 will resolve as false

// x !== "7" will resolve as true

// x !== 8 will resolve as true


// greater than/greater than or equal to

// >/>=

// Given that x = 10

// x > 5 will resolve to true

// x > 10 will resolve to false

// x >= 5 will resolve to true

// x >= 10 will resolve to true



// less than/less than or equal to

// </<=

// Given that x=8

// x < 10 will resolve to true

// x < 8 will resolve to false

// x <= 10 will resolve to true

// x <= 8 will resolve to true

```


[SHOULD ALSO PROBABLY GET SOMETHING IN THERE ABOUT && AND || OPS]

[SHOULD ALSO MENTION TRUTHY AND FALSY]


Now we are ready to start thinking about coding challenges. Let’s start with a guided one.



We are designing a system for a rollercoaster, which you must be taller than or exactly 130cm to ride. A scanner will generate an array of the heights of people in the queue. Using functions, loops and ifs, generate a new array with Boolean values of true or false, relating to whether the person in the queue is tall enough to ride.


Given an input of :

```
javascript

const visitorHeights = [88, 129, 130, 154, 200]

```


The expected result is:

> [false, false, true, true, true]

###### 1.	Firstly, create the function definition and add the visitor height array and minimum height value as parameters. This makes the function more reusable if, for example, the minimum height were to change.


```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){


}

```


###### 2.	create a new empty array for the result


```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){

   const result = []

}

```


###### 3.	Now, we create our loop. We are iterating over an array, so a “for of” loop is “best practice” although “for in” would work too.


```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){

   const result = []


   for (visitor of visitorHeights) {


   }

}

```

###### 4.	Now we add the logic that evaluates whether the visitor is tall enough and adds a true value to the results if they are.


```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){

   const result = []


   for (visitor of visitorHeights) {

      if (visitor >= minimumHeight) {

         // adds boolean true value to the result array

         result.push(true)

      }

   }

}

```


###### 5.	What if the if statement resolves as false? Let’s add an else, and add a false value to the results


```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){

   const result = []


   for (visitor of visitorHeights) {

      if (visitor >= minimumHeight) {

         // adds boolean true value to the result array

         result.push(true)

      } else {

         // adds boolean false value to the result array

         result.push(false)

      }

   }

}

```


###### 6.	Now to complete the function, we need to return the completed array of Boolean values. This will come at the end of the function, outside of the loop.

```
javascript

function checkQueueHeights(visitorHeights,minimumHeight){

   const result = []


   for (visitor of visitorHeights) {

      if (visitor >= minimumHeight) {

         // adds boolean true value to the result array

         result.push(true)

      } else {

         // adds boolean false value to the result array

         result.push(false)

      }

   }


   return result

}

```

###### 7.	Finally, we need to call the function with some arguments in order to see the results.

```
javascript

const scannerOutput = [88, 129, 130, 154, 200]

const minimum = 130


console.log(checkQueueHeights(scannerOutput,minimum))

```


> prints: [ false, false, true, true, true ]


Job done! We have achieved the expected outcome.

        '
    },
]
---