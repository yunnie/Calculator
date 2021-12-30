import {SetStateAction} from "react"

type Oper = "+" | "-" | "*" | "/" | "="
type Expr = number | Oper


interface DigitButtonProps {
  buttonLabel: string,
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
  resetValueToggle: boolean,
  setResetValueToggle: React.Dispatch<SetStateAction<boolean>>
}

interface OppButtonProps {
  opLabel: Oper,
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
  expr: Array<Expr>,
  setExpr: React.Dispatch<SetStateAction<Array<Expr>>>,
  resetValueToggle: boolean,
  setResetValueToggle: React.Dispatch<SetStateAction<boolean>>
}

interface ClearButtonProps {
  value: string,
  setValue: React.Dispatch<SetStateAction<string>>,
  setExpr: React.Dispatch<SetStateAction<Array<Expr>>>,
  setResetValueToggle: React.Dispatch<SetStateAction<boolean>>
}

export type {Oper, Expr, DigitButtonProps, OppButtonProps, 
    ClearButtonProps}
