---
anchor: "Extra Credit"
header: "Part 1a: Extra Credit and Points for Style"
subheader: "Some useful tips and tricks"
lessons: [
    {
        header: "Extras",
        content: '
        
So far, we have really focussed on the bare minimum that you need in order to solve code challenges. In this optional chapter, we are going to look at some slightly more advanced styles of writing JavaScript. Being familiar with these techniques is great because:

1.	Your code challenges will look really slick

2.	These techniques will appear in lots of code examples. If you understand other people’s code, then you can ~steal~ copy bits that are useful to you!


## Arrow functions

If you learn one thing from this chapter, make it this one. Arrow functions are an shorter way of writing JavaScript functions, which is very useful when we start using functions in callbacks (a callback is essentially passing a function into a function as an argument).



Arrow functions essentially strip out some of the keywords associated with functions. Let’s step through from traditional function to completely simplified arrow function:


```

// traditional function

function greet (name) {

  return "hello, my name is " + name

}

```


Now, we are going to make this function into an anonymous function. That is, we’re not going to give it a name. In order to call the function, we’ll assign it to a variable instead.


```

// traditional anonymous function

let greet = function (name) {

  return "hello my name is " + name

}

```


And now into an arrow function.


```

// remove the word function, and replace it with an arrow after the parameter

let greet = (name) => {

  return "hello my name is " + name

}


// if your function only has one line, you can also remove the "return" and braces.

let greet = (name) => "hello my name is " + name


// if you only have one parameter, you can remove the brackets around that too. if you have zero parameters, or more than one, you will still need the bracket

let greet = name => "hello my name is " + name


// call the function just like any other

console.log(greet("squidward"))

```


> Prints “hello my name is squidward”

You can see how compact and easy to read a function can get using arrow functions. Be aware that they are not suitable for all situations, so you may need to rewrite the function as a traditional function every now and then.


For more information on arrow functions, the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is always an excellent resource.


### Class Methods & Callbacks

JavaScript is intended to be a really easy language to use, and a part of that user-friendly design is providing built-in functions called *methods*. Pretty much every class (Strings are a class, arrays are a class, you can define custom classes etc.) have build-in methods that you can use without having to define a function to use. If you are looking at code challenge solutions online, you’re very likely to come across **array methods**. Again, [Mozilla is your friend](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), they maintain a list of all of the array methods available to you, with examples. Some, like pop(), push() and shift() should look familiar.


In this lesson, we will cover a few of the very useful methods which take an arrow function as an argument (this is known as a *callback*). These will absolutely supercharge your code challenging!


```

// Class Methods & Callbacks


const numbers = [23, 54, 99, 125, 43]

const names = ["Will", "Mike", "Lucas", "Dustin", "Max"]


// forEach

// This method replaces for loops with a shorthand.

names.forEach(name => console.log("presenting: " + name))


// a more complex example - drawing lottery numbers


// this is a helper function to turn the index into an ordinal (1nd, 2nd etc.)

const indexToOrdinal = number => {

  // a switch statement is like multiple ifs at once
 
 switch (number) {

    case 0:

      return (number+1)+"st"

    case 1:

      return (number+1)+"nd"

    case 2:

      return (number+1)+"rd"

    default:

      return (number+1)+"th"

  }

}


// notice how the brackets and braces are needed for this arrow function as we have two parameters and multiple lines of code within

numbers.forEach( (number, index) => {

  const ord = indexToOrdinal(index)

  console.log("...and the " + ord +  " lottery number is... " + number + "!")

})


// map

// the map method will apply a function to every element of the input array and output a NEW array of the same length. 

// This is useful if you want to create an array to work with, but not to overwrite the original

const isDivisibleByFive = numbers.map( number => {

  if (number % 5 === 0) {

    return true

  } else {

    return false

  }

})


console.log(isDivisibleByFive)


// filter

// The filter method creates a new array only populated with the elements of the original which pass a condition

const multiplesOfFive = numbers.filter( number => number % 5 === 0)


console.log(multiplesOfFive)

```


### ES6

JavaScript has been around since 1995, and like most popular languages has gone through some changes and improvements as the scope of its use widened. The last major update to the language is commonly referred to as **ES6**.  Being able to show that you use up-to-date syntax and keywords is a promising sign to potential employers, so try to keep up with new developments when you can.


The good news is, you already know some ES6! *let* and *const*, arrow functions and for/of loops are all ES6 features. If you want to learn some more nice ES6 tricks, I highly recommend [this](https://www.w3schools.com/js/js_es6.asp) article, which generally uses beginner-friendly language and examples.

        '
    },
]
---