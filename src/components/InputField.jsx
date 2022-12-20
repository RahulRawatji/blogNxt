import React from 'react';

import './inputField.css';

const InputField = ({title, placeholder}) => {
  return (
    <div className='input_field'>
        <label htmlFor={title}>{title}</label>
        <input id={title} placeholder={placeholder}></input>
    </div>
  )
}

export default InputField