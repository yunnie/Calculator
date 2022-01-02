import React, { useState } from "react"
import {render, fireEvent, screen} from "@testing-library/react"
import Calculator from "./Calculator"

test('Initial displays is set to 0', () => {
  render(<Calculator />)
  expect(screen.getByTestId("display")).toHaveTextContent("0")
})

test('Pressing numeric buttons 6 then 7 displays 67', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId('7'))
  expect(screen.getByTestId("display")).toHaveTextContent("67")
})

test('Other digits display on screen', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('1'))
  expect(screen.getByTestId("display")).toHaveTextContent("1")
  fireEvent.click(screen.getByTestId("2"))
  expect(screen.getByTestId("display")).toHaveTextContent("12")
  fireEvent.click(screen.getByTestId("3"))
  expect(screen.getByTestId("display")).toHaveTextContent("123")
  fireEvent.click(screen.getByTestId("4"))
  expect(screen.getByTestId("display")).toHaveTextContent("1234")
  fireEvent.click(screen.getByTestId("5"))
  expect(screen.getByTestId("display")).toHaveTextContent("12345")
  fireEvent.click(screen.getByTestId("8"))
  expect(screen.getByTestId("display")).toHaveTextContent("123458")
  fireEvent.click(screen.getByTestId("9"))
  expect(screen.getByTestId("display")).toHaveTextContent("1234589")
  fireEvent.click(screen.getByTestId("0"))
  expect(screen.getByTestId("display")).toHaveTextContent("12345890")
})

test('Pressing numeric buttons then an operator does not reset display', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId("+"))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId("="))
  expect(screen.getByTestId("display")).toHaveTextContent("12")
})

test('Evaluates Expression', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId("+"))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId('7'))
  expect(screen.getByTestId("display")).toHaveTextContent("7")
  fireEvent.click(screen.getByTestId("="))
  expect(screen.getByTestId("display")).toHaveTextContent("13")
})

test('If "0" is displayed, clear button shows "AC"', () => {
  render(<Calculator />)
  expect(screen.getByTestId("clear")).toHaveTextContent("AC")
})

test('If there is a value, clear shows "C"', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("clear")).toHaveTextContent("C")
})

test('If there are entries, "C" clears the value (sets to 0)', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId('clear'))
  expect(screen.getByTestId("display")).toHaveTextContent("0")
})

test('AC Clears the expression stack', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  fireEvent.click(screen.getByTestId("+"))
  fireEvent.click(screen.getByTestId('7'))
  fireEvent.click(screen.getByTestId("clear")) // sets to 0
  expect(screen.getByTestId("display")).toHaveTextContent("0")
  expect(screen.getByTestId("clear")).toHaveTextContent("AC")
  fireEvent.click(screen.getByTestId("clear")) // empties stack
  fireEvent.click(screen.getByTestId("="))  // evaluate the stack
  expect(screen.getByTestId("display")).toHaveTextContent("0")
})

test('Plus minus toggles number from positive to neg', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("6")
  fireEvent.click(screen.getByTestId('+/-'))
  expect(screen.getByTestId("display")).toHaveTextContent("-6")
})

test('Value remains negative appending to -0', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId('+/-'))
  expect(screen.getByTestId("display")).toHaveTextContent("-0")
  fireEvent.click(screen.getByTestId('6'))
  expect(screen.getByTestId("display")).toHaveTextContent("-6")
})

test('Adding a negative number is the same as subtraction', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId("7"))
  fireEvent.click(screen.getByTestId("+/-"))
  fireEvent.click(screen.getByTestId("+"))
  fireEvent.click(screen.getByTestId("6"))
  fireEvent.click(screen.getByTestId("="))
  expect(screen.getByTestId("display")).toHaveTextContent("-1")
})

test('Can convert a number into a percentage', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId("7"))
  fireEvent.click(screen.getByTestId("6"))
  expect(screen.getByTestId("display")).toHaveTextContent("76")
  fireEvent.click(screen.getByTestId("6"))
  fireEvent.click(screen.getByTestId("%"))
  expect(screen.getByTestId("display")).toHaveTextContent("7.66")
})

test('Can convert to twice percentage', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByTestId("7"))
  fireEvent.click(screen.getByTestId("%"))
  fireEvent.click(screen.getByTestId("%"))
  expect(screen.getByTestId("display")).toHaveTextContent("0.0007")
})

test('Can add a decimal point', () => {
  render(<Calculator />) 
  fireEvent.click(screen.getByTestId("7"))
  fireEvent.click(screen.getByTestId("."))
  fireEvent.click(screen.getByTestId("6"))
  expect(screen.getByTestId("display")).toHaveTextContent("7.6")
  fireEvent.click(screen.getByTestId("."))
  fireEvent.click(screen.getByTestId("6"))
  expect(screen.getByTestId("display")).toHaveTextContent("7.66")
  fireEvent.click(screen.getByTestId("."))
})
