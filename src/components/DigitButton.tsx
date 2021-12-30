import React, { FC } from "react"
import { DigitButtonProps } from "./types"


const DigitButton: FC<DigitButtonProps> = ({buttonLabel,  value, setValue, resetValueToggle, setResetValueToggle }) => {

  const handleOnClick = (buttonLabel: string ) => {
    // Need to deal with negatives and percentages
    // and when to reset to 0
    // Probably better to treat the digits as strings (easier) to deal
    // with +/- and . then conver to a number when pushed 
    // into the stack or when evaluated
    if (resetValueToggle) {
      setValue(buttonLabel)
      setResetValueToggle(false)
    } else {
      if (value === "0") {
        setValue(buttonLabel)
      } else if (value === "-0") {
        setValue("-" + buttonLabel)
      } else {
        setValue(value + buttonLabel)
      }
    }
  }

  return (
    <button 
      data-testid={buttonLabel}
      onClick={() => handleOnClick(buttonLabel)}>
      {buttonLabel}
    </button>
  )
}

export default DigitButton
