---
anchor: "Basics"
header: "write your first code"
subheader: "Over the next six lessons, you'll learn everything you need to start tackling code challenges"
lessons: [
    {
        header: "Lesson 1: JavaScript and Node",
        content: '# Lesson 1: JavaScript and Node

Throughout this guide, we will be working in JavaScript. Why JavaScript? Because it is used everywhere! Javascript is used in modern web frameworks like React (created and used by Meta/Facebook) and Vue (used by Netflix and others), it is used to script tests in frameworks like Cypress and Postman, it can even be used to create art and visuals using libraries like three.js and p5.js. In fact, according to PluralSight, it is the number one most learned technology on their platform.

Another great reason to learn JavaScript is that it is a comparatively beginner-friendly language: it is reasonably easy to read, has a forgiving syntax, and a lot of the more complex functionality is abstracted into nice, easy to use methods.

While JavaScript may look pretty “computerish”, it is in fact much closer to English than anything that a computer can understand. So, we need compilers and translators to facilitate running of our code. Node.js is the runtime most used to achieve this in JavaScript. You can install Node to your device and try writing and running some JavaScript locally, but for the purpose of this guide we recommend using a sandbox like [Replit](replit.com). Replit is a free, in-browser development platform where you can quickly spin up a Node environment and start coding. Sandboxes like replit are great, because they are safe environments where you cannot do any damage. If the code freezes up, you can always just close the tab and open a new one.

The other advantage is that you will not have to use the command line to install and run software like you would if you were learning on your computer. The command line (usually command prompt on Windows, terminal on MacOS) is a way of controlling your computer using text commands. It is incredibly useful, and we will touch on it in a later chapter but for now save yourself the hassle and use a sandbox.

[MAY NEED TO INCLUDE A QUICKSTART GUIDE FOR REPLIT, MAYBE ON ANOTHER PAGE]

The best way to learn to code is by doing, so for best results you will want to put this site side-by-side with a blank Node repl and follow along with the lessons. If you find that you’re curious about something, follow that curiosity! Change the code, break it and see if you can fix it again. That is a great way to develop your understanding. 

### links to lesson repls
If you follow along with the lessons you should end with a repl just like these ones. These are just provided for reference.
[lesson 2](https://replit.com/@LewisSaunders1/lesson2#index.js)
[lesson 3](https://replit.com/@LewisSaunders1/lesson3#index.js)
[lesson 4](https://replit.com/@LewisSaunders1/lesson4#index.js)
[lesson 5](https://replit.com/@LewisSaunders1/lesson5#index.js)
[lesson 6](https://replit.com/@LewisSaunders1/lesson6#index.js) ' 
    },
    {
        header: "Lesson 2: Variables, print statements and comments",
        content: 'Let’s jump straight into some code. Type this into your repl and hit “run”.

        let myName = “Lewis”
        console.log(myName)
        Congratulations! You just ran some code. Some things to note about this code:

        We declared a variable using “let”, gave it a name of “myName” and gave it a value of “Lewis”.
        We only need to use let when first declaring the variable, after that we can refer to it by its name.
        We then printed the variable called myName to the console. The console log shows the value of myName.
        Try changing “Lewis” to your name and running the code again
        Variables:
        Variables are at the heart of coding. We use them to hold onto values while the code runs, and this enables us to do all sorts of interesting things. A very important aspect of variables is in the name, it is variable, meaning that it can be changed. This is perfect for a script where we want to keep track of a value as it changes, such as a tally:

        Example 2

        // say we have a count of people entering a venue
        let tally = 0
        console.log(tally)

        // and a new customer comes along, so we increment the tally
        tally = tally + 1 // tally now equals itself plus one
        console.log(tally)

        // and another customer
        tally += 1 // this is another way of writing the above
        console.log(tally)
        You can see that we use the same variable throughout, and just vary its value. This is something that you will find yourself doing a lot!

        You will also see some sections of this code which are written in English and with a “//” at the front. These are called comments. Comments are designed to make code readable at a glance, and it is a good idea to include plenty of them in any code challenge which will be read by interviewers.

        Constants:
        The downside of variables is that they are sometimes too easy to change! So what if you want to hold onto a value that will not change during runtime? We would use a constant instead. Constants are declared just like variables, except that we use const instead of let.

        const iAm = "Douglas"
        console.log(iAm)

        // here, I am attempting to change the value of iAm to "Stephen"
        iAm = "Stephen"
        // but, it causes an error, because iAm is a constant
        console.log(iAm)
        TIP: Being sure to use a constant rather than a variable when appropriate will look good on a code challenge, as they make code less prone to bugs.

        TIP: In javascript, you can also declare a variable using "var". This is an older style that still pops up now and then in code, but is generally discouraged as it can be accessed anywhere in the code ("globally scoped"), as opposed to "let" which can only be referred to from the block of code in which it is declared ("block scoped"). This article covers scope in more detail and with examples.'
    },
    {
        header: "Lesson 3: Data types, operators, and string concatenation",
        content: '# Lesson 3: Data types, operators, and string concatenation

## Data Types:
As you may have already noticed, a variable is not confined to only being text, or a number. Variables can actually hold pretty much any value that you hand them, but we will get to that later. To start with, we will discuss some of JavaScript’s primitive data types:
### Number:
Numbers in JavaScript can be either integers (aka whole numbers) or floating-point numbers (aka decimal numbers, for example 4.54). This is not always the case in all languages. Numbers can also be one of special types such as NaN (not a number), or +Infinity or -Infinity.

```
// examples of numbers
const age = 21
const grade = 67.5
const schoolName = NaN
```

### String:
Strings are text assigned to a variable. They can be a letter, a word, a space, or the entire text of Moby Dick. When assigning a string to a variable, you need to surround it with quotes (“”) so that JavaScript interprets it as a string.

```
// examples of strings
const name = "Bob"
const species = "sheep dog"
const space = " "
```

### Boolean:
Boolean variables have only two possible states: true or false. Remember that in JavaScript true and false are not capitalised.

```
// examples of booleans
const on = true
const off = false
```

Some other data types that you might come across (usually when things go wrong):

### Null:
Null represents the intentional absence of value. Some operations will return null if unsuccessful so you can actually check for a null result in your code.

### Undefined:
Undefined is different from null in that it represents a variable that has not yet been assigned a value. Constants cannot be undefined.

```
// examples of null and undefined
let nullExample = null
let noValue
console.log(noValue) // will return undefined
```

## Operators:
Operators are used to add, subtract, multiply and divide numbers. You may not be so familiar with modulo: this operator divides the numbers and returns the remainder as an integer (for example 17 % 5 would return 2). This is useful for checking that a number is divisible by another number.

```
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

## String concatenation and string length:
You can also use the addition operator (+) with strings, although it has a slightly different effect. This is called concatenation.

```
// string concatenation
const firstName = "Homer"
const lastName = "Simpson"
console.log(firstName + lastName)

prints: “HomerSimpson”
```

As you can see, the two strings were added together, but there is a space missing. A common trick when concatenating strings is to also concatenate additional spaces.

```
// adding in spaces
console.log(firstName + " " + lastName)

prints: “Homer Simpson”
```

A property of strings that you may often use is the length of the string:

```
// string length
console.log(firstName + " is a name with "+ firstName.length + " letters.")

prints: Homer is a name with 5 letters.
```'
    }
]
---