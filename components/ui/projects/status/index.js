import React from 'react'

const Status = ({classNames,text,visible}) => {
  return (
    visible ? 
    <div
    className={classNames}
    >{text}</div>: 
    <></>
  )
}

export default Status
