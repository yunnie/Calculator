import React, { FC } from "react"
import { ModifyValueProps } from "./types"

const ModifyValueButton: FC<ModifyValueProps> = ({ modifierLabel, modifyFn })  => {

  return (
    <button 
      data-testid={modifierLabel} 
      onClick={() => modifyFn()}
      className="modifier-button">
      {modifierLabel} 
    </button>
  )
}

export default ModifyValueButton
