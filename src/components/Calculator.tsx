import React, { FC, useState } from "react"
import Display from "./Display"
import DigitButton from "./DigitButton"
import OppButton from "./OppButton"
import ClearButton from "./ClearButton"
import ModifyValueButton from "./ModifyValueButton"
import {Expr, Oper} from "./types"
import {handlePlusMinus, handlePercent, handleDecimal} from "./handlers"
import './Calculator.css'


const Calculator = () => {
  const [value, setValue] = useState<string>("0") // What is displayed
  /* contains the calculation expression */
  const [expr, setExpr] = useState<Array<Expr>>([]) 

  /* After an operator (+, -, *, /) is pressed, 
   * if a digit is pressed then the value should
   * reset to the new digit */
  const [resetValueToggle, setResetValueToggle] = useState<boolean>(false)

  return (
    <div className="container">
      <Display value={value} /> 
      <div className="first-row">
        <ClearButton value={value} setValue={setValue} setExpr={setExpr} setResetValueToggle={setResetValueToggle}/>
        <ModifyValueButton modifierLabel="+/-" modifyFn={handlePlusMinus(value, setValue)} />
        <ModifyValueButton modifierLabel="%" modifyFn={handlePercent(value, setValue)} />
        <OppButton op={Oper.Divide} value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>

      <div className="second-row">
        <DigitButton buttonLabel={"7"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"8"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"9"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton op={Oper.Multiply} value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
     
      <div className="third-row">
        <DigitButton buttonLabel={"4"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"5"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"6"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton op={Oper.Minus} value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>

      <div className="fourth-row">
        <DigitButton buttonLabel={"1"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"2"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <DigitButton buttonLabel={"3"} buttonClass={"single"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <OppButton op={Oper.Plus} value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
      
      <div className="fifth-row">
        <DigitButton buttonLabel={"0"} buttonClass={"double"} value={value} setValue={setValue} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
        <ModifyValueButton modifierLabel="." modifyFn={handleDecimal(value, setValue)} />
    
        <OppButton op={Oper.Equal} value={value} setValue={setValue} expr={expr} setExpr={setExpr} resetValueToggle={resetValueToggle} setResetValueToggle={setResetValueToggle} />
      </div>
    </div>
  )

}

export default Calculator
