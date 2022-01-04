import React from "react"
import {render, fireEvent, screen} from "@testing-library/react"
import Calculator from "./Calculator"
import { Oper } from "./types"

describe('Modify Value Buttons', () => {

  it('Plus minus toggles number from positive to neg', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId('+/-'))
    expect(screen.getByTestId("display")).toHaveTextContent("-6")
  })

  it('Value remains negative appending to -0', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('+/-'))
    expect(screen.getByTestId("display")).toHaveTextContent("-0")
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("-6")
  })

  it('Adding a negative number is the same as subtraction', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId("7"))
    fireEvent.click(screen.getByTestId("+/-"))
    fireEvent.click(screen.getByTestId(Oper.Plus))
    fireEvent.click(screen.getByTestId("6"))
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("-1")
  })

  it('Can convert a number into a percentage', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId("7"))
    fireEvent.click(screen.getByTestId("6"))
    expect(screen.getByTestId("display")).toHaveTextContent("76")
    fireEvent.click(screen.getByTestId("6"))
    fireEvent.click(screen.getByTestId("%"))
    expect(screen.getByTestId("display")).toHaveTextContent("7.66")
  })

  it('Can convert to twice percentage', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId("7"))
    fireEvent.click(screen.getByTestId("%"))
    fireEvent.click(screen.getByTestId("%"))
    expect(screen.getByTestId("display")).toHaveTextContent("0.0007")
  })

  it('Can add a decimal point', () => {
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
})
