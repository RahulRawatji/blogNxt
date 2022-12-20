import React from 'react';
import './button.css';

const Button = ({title="", icon=null, border, fontSize="12px", padding, className=""}) => {
  return (
    <button className={`btn ${className}`} style={{ border, fontSize, padding}}>{icon}{title}</button>
  )
}

export default Button