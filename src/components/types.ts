import {SetStateAction} from "react"

/* There are a set number of operators
 * Plus, Minus, Multiple, Divide, and Equal
 * And we want to use the utf-8 encoding 
 * to display these on the screen
 */
enum Oper {
  Plus = '\u002B',
  Minus = '\u2212',
  Multiply = '\u2A09',
  Divide = '\u00F7',
  Equal = '\u003D'
}
/* An expression contains a combination of numbers 
 * and operators */
type Expr = number | Oper

type SetAction<T> = React.Dispatch<SetStateAction<T>>

/* The calculator maintains three states
 * * the vaue displayed
 * * the expression stack
 * * a toggle to indicate if the display should be reset
 * Most types are a combination of these three states
 */
interface ValueState {
  value: string,
  setValue: SetAction<string>,
}

interface ExprState {
  expr: Array<Expr>,
  setExpr: SetAction<Array<Expr>>,
}

interface ResetValueState {
  resetValueToggle: boolean,
  setResetValueToggle: SetAction<boolean>
}

/* React Component Prop types */
type DigitButtonProps = { buttonLabel: string } & 
  ValueState & 
  ResetValueState

type OppButtonProps = { op: Oper } & 
  ValueState & 
  ExprState & 
  ResetValueState

type ClearButtonProps = ValueState &
  { setExpr: SetAction<Array<Expr>>, 
    setResetValueToggle: SetAction<boolean>}

type HandleModifyValueFn = () => void
interface ModifyValueProps {
  modifierLabel: string,
  modifyFn: HandleModifyValueFn,
}

/* Export the types and the enum */
export type {Expr, DigitButtonProps, OppButtonProps, 
    ClearButtonProps, ModifyValueProps, SetAction, 
    HandleModifyValueFn}

export { Oper }
