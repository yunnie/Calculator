import React, { FC } from "react"
import { OppButtonProps, Oper } from "./types"


const OppButton: FC<OppButtonProps> = ({ opLabel, value, setValue, expr, setExpr, resetValueToggle, setResetValueToggle }) => {

  const evaluate = (op: Oper, v1: number, v2: number): number => {
      if (op === "+") {
        return(v1 + v2)
      } else if (op === "-") {
        return(v1 - v2)
      } else if (op === "*") {
        return(v1 * v2)
      } else {
        return(v1 / v2)
      }
  }

  const handleOnClick = (opLabel: Oper) => {
    if (expr.length === 2 && opLabel === "=") {
      const exprCopy = [...expr]
      const op1 = exprCopy.pop()
      const v1 = exprCopy.pop()
      setValue(String(evaluate((op1 as Oper), Number(v1), Number(value))))
    } else if (expr.length > 2 && opLabel === "=") {
      const exprCopy = [...expr]
      const v2 = exprCopy.pop()
      const op1 = exprCopy.pop()
      const v1 = exprCopy.pop()
      setValue(String(evaluate((op1 as Oper), Number(v1), Number(v2))))
      setExpr([])
    } else if (expr.length > 0 && 
      "+-/*".includes(String(expr[expr.length - 1]))) {
      // last entry was an operation 
      // replace last operation
      const replacement = [...expr] 
      replacement[replacement.length - 1] = opLabel
      setExpr(replacement)
    } else if (expr.length > 2) {
      const exprCopy = [...expr]
      const v1 = exprCopy.pop()
      const op = exprCopy.pop()
      const v2 = exprCopy.pop()
      exprCopy.push(evaluate((op as Oper), Number(v1), Number(v2)))
      setValue(String(exprCopy[exprCopy.length - 1]))
      exprCopy.push(opLabel)
      setExpr(exprCopy)
    } else if (expr.length === 2 && opLabel === "=") {
      const exprCopy = [...expr]
      const op1 = exprCopy.pop()
      const v1 = exprCopy.pop()
      setValue(String(evaluate((op1 as Oper), Number(v1), Number(value))))
      setExpr([])
    } else {
      const replacement = [...expr]
      replacement.push(Number(value))
      replacement.push(opLabel)
      setExpr(replacement)
    }

    if (!resetValueToggle) {
      setResetValueToggle(true)
    }
  }

  return (
    <button 
      data-testid={opLabel}
      onClick={() => handleOnClick(opLabel)}>
      {opLabel}
    </button>
  )
}

export default OppButton
