# A Simple Calculator

The world doesn't really need another calcuator app. But writing this application did provide me with a project to develop a better understanding of Typescript, React and CSS. 

## How to model an expression

A recursive type is often used to describe a mathematical expression, and then a recursive `evaluation` function unwinds the expression into a single value.

But since the user enters in the values and operators one at a time, I decided to keep track of the expression in a stack. Otherwise, I would need to keep track of incomplete or partial expressions. 

I also choose to keep track of the numbers as `strings`  as this made it easier to deal with inserting a decimal place and converting from positive to negative values. One problem is that non-numeric strings could end up in the `number`. But the only way to enter a value is through pressing a button, and the buttons are limited to digits. So representing the digits as strings seems reasonably safe.

## Global states

There are a few global states that I need to track:

* The value displayed on the screen
* The expression stack
* Whether or not the value should be reset on the next input

Choosing to represent the numbers as `strings` reduced the number of states that I needed to track. For example, had I represented the numbers as integers or floats, I would have to track whether the number was positive or negative. To get `56` the user would enter `5` then `6`. In the background, we would multiply `5` by `10` then add `6`. To get `-56` the user would enter `5`, followed (maybe) by `-`, then by `6`. We could still multiply `-5` to get `-50`, but then we would need to subtract `6` to get `-56`. So we if the number is positive, we need to add additional digits, if the number is negative we need to subtract additional digits.

But if we keep track of digits as strings, we just concatonate the next digit. That's much easier.

## Buttons
In this implementation I created a few different button components. There are the digit buttons, the operator buttons, the modify value buttons, and the clear button. Each provides a slightly different function, and different states, which is why I choose to model them as seperate components. 

## Types
There are a limited number of operations. So it made sense to model the operations as an `enumeration`. Since the divide and multiply symbols are typographically different from their usual `/` and `*` representation, I choose to use string unicode string representations of the enumeration. 

Where possible, I tried to re-use types. That helps clearify the similarities and differences among the components. 

## Styles
The CSS style sheet is pretty simple. Why make something more complicated than necessary? I may encorporate `flexbox` later, so that the calculator can resize, but I think that's overkill for this calculator.

I do need to find a better color scheme.