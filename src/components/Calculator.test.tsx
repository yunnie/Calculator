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

