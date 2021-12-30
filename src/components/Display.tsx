import React, { FC } from "react"

interface DisplayProps {
  value: string
}

const Display: FC<DisplayProps> = ({value}) => {

  return (
    <div 
      data-testid="display"
      className="display">
      {value}
    </div>
  )
}

export default Display
