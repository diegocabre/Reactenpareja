import React from 'react'


export const Alerta = ({message, type}) => {
  return (
      <div className={`alert alert-${type}`}>{message}</div>
  );
}

export default Alerta