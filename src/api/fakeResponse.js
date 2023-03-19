export const svrResponse = (newName, newEmailAddress) => {
  //this is a fake server call.
  const promise = new Promise((resolve, reject) => {
    const errors = []
    setTimeout(() => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const validateEmail = pattern.test(newEmailAddress);
      if(newName.length < 4) errors.push("You need to enter more than 3 characters for name")
      if(!validateEmail) errors.push("Invalid Email")
      if(errors.length > 0) reject({error: errors})
      else resolve({success: "Account Created"})
    }, 2000)
  })
  return promise
}