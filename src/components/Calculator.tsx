import React, { FC, useState } from "react"
import Display from "./Display"
import DigitButton from "./DigitButton"
import OppButton from "./OppButton"
import ClearButton from "./ClearButton"
import ModifyValueButton from "./ModifyValueButton"
import {Oper, Expr} from "./types"
import {handlePlusMinus, handlePercent, handleDecimal} from "./handlers"


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
      <div className="first-row">
        <ClearButton value={value} setValue={setValue} setExpr={setExpr} setResetValueToggle={setResetValueToggle}/>
        <ModifyValueButton modifierLabel="+/-" modifyFn={handlePlusMinus(value, setValue)} />
        <ModifyValueButton modifierLabel="%" modifyFn={handlePercent(value, setValue)} />
        <OppButton opLabel="/" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>

      <div className="second-row">
        <DigitButton buttonLabel={"7"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"8"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"9"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton opLabel="*" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
     
      <div className="third-row">
        <DigitButton buttonLabel={"4"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"5"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"6"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton opLabel="-" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>

      <div className="fourth-row">
        <DigitButton buttonLabel={"1"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"2"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"3"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton opLabel="+" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
      
      <div className="fifth-row">
        <DigitButton buttonLabel={"0"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <ModifyValueButton modifierLabel="." modifyFn={handleDecimal(value, setValue)} />
    
        <OppButton opLabel="=" value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
    </div>
  )

}

export default Calculator
