# A Simple Calculator

The world doesn't really need another calcuator app. But writing this application did provide me with a project to help develop a better understanding of both Typescript and React. 

## How to describe an expression

Often a recursive type is used to describe a mathematical expression, and then a recursive `evaluation` function unwinds the expression into a single value. 

But since we're entering in the values and operators one at a time, I decided to keep track of the expression in a stack. Otherwise, I would need to keep track of incomplete or partial expressions. 

I also choose to keep track of the numbers as `strings` as this made it easier to deal with inserting a decimal place and converting from positive to negative values. One problem is that non-numeric strings could end up in the `number`. But the only way to enter a value is through pressing a button, and the buttons are limited, representing the digits as strings seems reasonably safe.

## What global states

There were a few global states that I needed to track:

* The value displayed on the screen
* The expression stack
* Whether or not the value should be reset on the next input

Choosing to represent the numbers as `strings` reduced the number of states that I needed to track. 
