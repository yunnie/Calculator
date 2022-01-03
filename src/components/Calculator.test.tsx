import React from "react"
import {render, fireEvent, screen} from "@testing-library/react"
import Calculator from "./Calculator"

describe('Calculator display and clear', () => {
  it('Initial displays is set to 0', () => {
    render(<Calculator />)
    expect(screen.getByTestId("display")).toHaveTextContent("0")
  })

  it('If "0" is displayed, clear button shows "AC"', () => {
    render(<Calculator />)
    expect(screen.getByTestId("clear")).toHaveTextContent("AC")
  })

  it('If there is a value, clear shows "C"', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("clear")).toHaveTextContent("C")
  })

  it('If there are entries, "C" clears the value (sets to 0)', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId('clear'))
    expect(screen.getByTestId("display")).toHaveTextContent("0")
  })

  it('AC Clears the expression stack', () => {
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
})
