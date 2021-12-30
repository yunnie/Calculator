import {SetStateAction} from "react"

type Oper = "+" | "-" | "*" | "/" | "="
type Expr = number | Oper

type SetAction<T> = React.Dispatch<SetStateAction<T>>
type HandleModifyValueFn = () => void


interface DigitButtonProps {
  buttonLabel: string,
  value: string,
  setValue: SetAction<string>,
  resetValueToggle: boolean,
  setResetValueToggle: SetAction<boolean>
}

interface OppButtonProps {
  opLabel: Oper,
  value: string,
  setValue: SetAction<string>,
  expr: Array<Expr>,
  setExpr: SetAction<Array<Expr>>,
  resetValueToggle: boolean,
  setResetValueToggle: SetAction<boolean>
}

interface ClearButtonProps {
  value: string,
  setValue: SetAction<string>,
  setExpr: SetAction<Array<Expr>>,
  setResetValueToggle: SetAction<boolean>
}

interface ModifyValueProps {
  modifierLabel: string,
  modifyFn: HandleModifyValueFn,
}

export type {Oper, Expr, DigitButtonProps, OppButtonProps, 
    ClearButtonProps, ModifyValueProps, SetAction, HandleModifyValueFn}
