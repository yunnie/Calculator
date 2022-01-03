import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Calculator from "./Calculator"

describe('Digit Buttons', () => {
  it('Pressing numeric buttons 6 then 7 displays 67', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId('7'))
    expect(screen.getByTestId("display")).toHaveTextContent("67")
  })

  it('Other digits display on screen', () => {
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

  it('If starts with 0 then 0 gets overwritten', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId("0"))
    expect(screen.getByTestId("display")).toHaveTextContent("0")
    fireEvent.click(screen.getByTestId("4"))
    expect(screen.getByTestId("display")).toHaveTextContent("4")

  })
})
