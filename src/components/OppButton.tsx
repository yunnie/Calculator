import React, { FC } from "react"
import { OppButtonProps, Oper } from "./types"


const OppButton: FC<OppButtonProps> = ({ op, value, setValue, expr, setExpr, resetValueToggle, setResetValueToggle }) => {

  const evaluate = (op: Oper, v1: number, v2: number): number => {
      if (op === Oper.Plus) {
        return(v1 + v2)
      } else if (op === Oper.Minus) {
        return(v1 - v2)
      } else if (op === Oper.Multiply) {
        return(v1 * v2)
      } else {
        return(v1 / v2)
      }
  }

  const handleOnClick = (op: Oper) => {
    if (expr.length === 2 && op === Oper.Equal) {
      //expr contains a value and an operation
      const exprCopy = [...expr]
      const op1 = exprCopy.pop()
      const v1 = exprCopy.pop()
      setValue(String(evaluate((op1 as Oper), Number(v1), Number(value))))
      setExpr([])
    } else if (expr.length > 2 && op === Oper.Equal) {
      //expr contains a value, an operation and a value
      const exprCopy = [...expr]
      const v2 = exprCopy.pop()
      const op1 = exprCopy.pop()
      const v1 = exprCopy.pop()
      setValue(String(evaluate((op1 as Oper), Number(v1), Number(v2))))
      setExpr([])
    } else if (expr.length > 0 && 
              [Oper.Plus, Oper.Minus, Oper.Multiply, Oper.Divide].includes(op)) {
      // last entry was an operation 
      // replace last operation
      const replacement = [...expr] 
      replacement[replacement.length - 1] = op
      setExpr(replacement)
    } else if (expr.length > 2) {
      //There are three elemnts in expr
      //evaluating the elements and push the result back into 
      //the stack. this ensures that the stack never grows to 
      //more than three elements
      const exprCopy = [...expr]
      const v1 = exprCopy.pop()
      const op = (exprCopy.pop() as Oper)
      const v2 = exprCopy.pop()
      exprCopy.push(evaluate(op, Number(v1), Number(v2)))
      setValue(String(exprCopy[exprCopy.length - 1]))
      exprCopy.push(op)
      setExpr(exprCopy)
    } else if (expr.length === 2 && op === Oper.Equal) {
      const exprCopy = [...expr]
      const op1 = (exprCopy.pop() as Oper)
      const v1 = exprCopy.pop()
      setValue(String(evaluate(op1, Number(v1), Number(value))))
      setExpr([])
    } else if (op !== Oper.Equal){
      setExpr([...expr, Number(value), op])
    }

    if (!resetValueToggle) {
      setResetValueToggle(true)
    }
  }

  return (
    <button 
      data-testid={op}
      onClick={() => handleOnClick(op)}>
      {op}
    </button>
  )
}

export default OppButton
