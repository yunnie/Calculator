import { SetAction, HandleModifyValueFn } from "./types"


const handlePlusMinus = (value: string, setValue: SetAction<string>): HandleModifyValueFn => {  
  return (() => {
    if (value.startsWith("-")) {
      setValue(value.substr(1))
    } else {
      setValue("-" + value)
    }
  })
}

const handlePercent = (value: string, setValue: SetAction<string>): HandleModifyValueFn => {
  return (() => {
    setValue(String(Number(value)/100))
  })
}

const handleDecimal = (value: string, setValue: SetAction<string>): HandleModifyValueFn => {
  return ( () => {
    if (!value.includes(".")) {
      setValue(value + ".")
    }
  })
}

export {handlePlusMinus, handlePercent, handleDecimal}
