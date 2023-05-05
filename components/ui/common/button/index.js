import React from 'react'

const Button = ({classNames, text, handler, disabled}) => {
  return (
    <button 
    className={classNames}
    disabled = {disabled}
    onClick={handler}
    >{text}</button>
  )
}

export default Button
