import React, { FC, useState } from "react"
import Display from "./Display"
import DigitButton from "./DigitButton"
import OppButton from "./OppButton"
import ClearButton from "./ClearButton"
import ModifyValueButton from "./ModifyValueButton"
import {Oper, Expr} from "./types"
import {handlePlusMinus} from "./handlers"


const Calculator = () => {
  const [value, setValue] = useState<string>("0") // What is displayed
  /* contains the calculation expression */
  const [expr, setExpr] = useState<Array<Expr>>([]) // Not sure if 0 makes sense here
  const [resetValueToggle, setResetValueToggle] = useState<boolean>(false)

  /* Percent does not need to be state. Just an action. */
  /* write handlers for
   *   All Clear/Clear
   *   Plus Minus
   *   Percent
   *   Equal (Single action button)
   *   Maybe add handleOnClick to DigitButton and OppButton
   */


  return (
    <div>
      <Display value={value} /> 
      <ModifyValueButton modifierLabel="+/-" modifyFn={handlePlusMinus(value, setValue)} />
      <ClearButton value={value} setValue={setValue} setExpr={setExpr} setResetValueToggle={setResetValueToggle}/>
      <DigitButton buttonLabel={"6"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      <DigitButton buttonLabel={"7"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      <OppButton opLabel="+" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      <OppButton opLabel="=" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
    </div>
  )

}

export default Calculator
