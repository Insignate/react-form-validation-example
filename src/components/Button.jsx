import React, { useCallback, useState } from 'react'

const Button = ({
  onClick = async () => {},
  text = 'Submit',
  type = 'button'
}) => {
  const [disabled, setDisabled] = useState(false)

  const submitClick = useCallback(async() => {
    setDisabled(true)
    await onClick()
    setDisabled(false)
  }, [onClick])
  
  return (
    <button
      className='color-validation'
      disabled={disabled}
      onClick={() => submitClick()}
      type={type}
    >{text}</button>
  )
}

export default Button