import React from 'react'

const Input = ({
  value, 
  onChange = () => {},
  type,
  minLength = 0,
  maxLength = 99999,
  required = false,
  placeholder = ''
}) => 
  <input 
    className={value.length > 0  ? 'color-validation' : ''}
    value={value}
    onChange={e => onChange(e.target.value)} //always returns a string
    type={type}
    minLength={minLength}
    maxLength={maxLength}
    required={required}
    placeholder={placeholder}
  />
  
export default Input