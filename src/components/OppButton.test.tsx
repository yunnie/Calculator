import React from "react"
import {render, fireEvent, screen} from "@testing-library/react"
import Calculator from "./Calculator"
import { Oper } from "./types"

describe('Operation Buttons', () => {

  it('Addition function works', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId(Oper.Plus))
    fireEvent.click(screen.getByTestId('8'))
    expect(screen.getByTestId("display")).toHaveTextContent("8")
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("14")
  })

  it('Subtration function works', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('4'))
    expect(screen.getByTestId("display")).toHaveTextContent("4")
    fireEvent.click(screen.getByTestId(Oper.Minus))
    fireEvent.click(screen.getByTestId("9"))
    expect(screen.getByTestId("display")).toHaveTextContent("9")
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("-5")
  })

  it('Multiplication function works', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('4'))
    expect(screen.getByTestId("display")).toHaveTextContent("4")
    fireEvent.click(screen.getByTestId(Oper.Minus))
    fireEvent.click(screen.getByTestId("3"))
    expect(screen.getByTestId("display")).toHaveTextContent("3")
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("1")
  })

  it('Multiplication function works', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId(Oper.Divide))
    fireEvent.click(screen.getByTestId("3"))
    expect(screen.getByTestId("display")).toHaveTextContent("3")
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("2")
  })

  it('Can overwrite operation works', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByTestId('6'))
    expect(screen.getByTestId("display")).toHaveTextContent("6")
    fireEvent.click(screen.getByTestId(Oper.Plus))
    fireEvent.click(screen.getByTestId(Oper.Divide))
    fireEvent.click(screen.getByTestId("3"))
    expect(screen.getByTestId("display")).toHaveTextContent("3")
    fireEvent.click(screen.getByTestId(Oper.Equal))
    expect(screen.getByTestId("display")).toHaveTextContent("2")
  })
})
