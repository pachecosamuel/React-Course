import React from 'react'

const ChildrenProp = ({children, myValue}) => {
  return (
    <div>
        <p>it's strange, because my paragraph is showed</p>
        {children}
        <p>My salary: {myValue}</p>
    </div>
  )
}

export default ChildrenProp