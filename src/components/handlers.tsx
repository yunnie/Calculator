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

export {handlePlusMinus}
