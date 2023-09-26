import React from 'react'


const Alerta = ({color, children}) => {
    return (
      
      <div className={`alert alert.${color} my-2`} role="alert">
        {children}
      </div>
      
      
    )
  }

export default Alerta