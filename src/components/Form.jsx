import React, { useCallback } from 'react'

const Form = ({props, submit}) => {
  const submitForm = useCallback(e => {
    e.preventDefault()
    submit()
  }, [submit])
  return (
    <form 
      onSubmit={e => submitForm(e)}
    >{props}</form>
  )
}

export default Form