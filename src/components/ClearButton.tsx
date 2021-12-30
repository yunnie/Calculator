import React, { FC } from "react"
import { ClearButtonProps } from "./types"

const ClearButton: FC< ClearButtonProps > = ({value, setValue, 
  setExpr, setResetValueToggle}) => {

  const handleClearClick = () => {
    if (value === "0") {
      setExpr([])
      setResetValueToggle(false)
    } else {
      setValue("0")
      setResetValueToggle(false)
    }
  }


  return(
    <button
      data-testid="clear"
      onClick={()=> handleClearClick()}>
      {value === "0" ? "AC" : "C"}
    </button>
  )
}

export default ClearButton
