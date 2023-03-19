import { useCallback, useContext, useState } from 'react';
import { svrResponse } from './api/fakeResponse';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import MessageBox from './components/Modals/MessageBox';
import { ModalsContext } from './components/Modals/modal';


function App() {

  
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const {fnShowWindow} = useContext(ModalsContext)


  const formSubmit = useCallback(() => {

  }, [])

  //i copied and pasted the same code as the api fake response validation to give you an idea
  const btnReactValidation = useCallback(() => {

    const errors = []
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    if(name.length < 4) errors.push("You need to enter more than 3 characters for name")
    if(!pattern.test(address)) errors.push("Invalid Email")
    fnShowWindow("test", ["test"])
    if(errors.length > 0) fnShowWindow("Error", errors)
    else fnShowWindow('Success', ["Account Created"])

  }, [name, address])

  const btnServerValidation = useCallback(async() => {
    try{
      const svrResp = await svrResponse(name, address) //this would normally be fetch("url") with await
      console.log(svrResp)
      if (svrResp.success)
        fnShowWindow("Success" , [svrResp.success])
    }
    catch(error){
      fnShowWindow("Error", error.error)
    }
    
  }, [name, address])
  

  return (
    
    <main>
      <MessageBox />
      <Form 
        submit={formSubmit} 
        props={
          <>
            <label>All Fields are Required <strong>FORM and REACT</strong> Example</label>
            <label>Enter Name</label>
            <Input 
              value={name} 
              onChange={setName}
              type='text'
              required={true}
              minLength='4'
              maxLength='10'
              placeholder='Enter Name'
            />
            <label>Enter Email</label>
            <Input 
              value={address} 
              onChange={setAddress}
              type='email'
              required={true}
              minLength='4'
              maxLength='30'
              placeholder='Enter Email'
            />
            <label>Validation Buttons:</label>
            <Input 
              value='HTML Form Verification'
              type='submit'
            />
            <Button 
              onClick={btnReactValidation}
              text='React Validation'
            />
            <Button 
              onClick={btnServerValidation}
              text='React Server Validation'
            />
          </>
        }
      />
    </main>
  )
}

export default App;
