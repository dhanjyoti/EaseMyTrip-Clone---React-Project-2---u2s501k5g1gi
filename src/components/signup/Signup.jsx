import React, { useState } from 'react'
import api from '../../utils/api'
import Dialog from '../dialog/Dialog'
import Input from '../Input';

const Signup = ({open, openChange}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("submitted");
      if (password === confirmPassword) {
        (async () => {
          try {
            let res = await api.signup({ data: { name, email, password, appType: 'bookingportals' } })
            // console.log(res);
            if (res.status == "success") {
              console.log("successful");
            }
          } catch (e) {
            console.log("error", e);
          }
        })()
      } else {
        alert('Invalid password match')
      }
    }
  

  return (
    <Dialog
              title={"Signup or Create an account"}
              content={
                <form onSubmit={handleSubmit}>
                  <div>
                    Name
                  </div>
                  <div>
                    <Input placeholder={"Enter your name"} required value={name} onChange={({ target }) => {
                      setName(target.value)
                    }} />
                  </div>
                  <div>
                    Email ID
                  </div>
                  <div>
                    <Input placeholder={"Enter email ID"} type={'email'} required value={email} onChange={({ target }) => {
                      setEmail(target.value)
                    }} />
                  </div>
                  <div>
                    Password
                  </div>
                  <div>
                    <Input placeholder={"Enter a password"} type={'password'} required value={password} onChange={({ target }) => {
                      setPassword(target.value)
                    }} />
                  </div>
                  <div>
                    Confirm Password
                  </div>
                  <div>
                    <Input placeholder={"Confirm password"} type={'password'} required value={confirmPassword} onChange={({ target }) => {
                      setConfirmPassword(target.value)
                    }} />
                  </div>
                  <div>
                    <button className='continue-button' type='submit'>CONTINUE</button>
                  </div>
                  <div>
                    <p className='terms-n-conditions'>By logging in, I understand & agree to EaseMyTrip
                      <span className='text-hyperlink'> terms of use</span> and <span className='text-hyperlink'>privacy policy</span>
                    </p>
                  </div>
                </form>
              }
              open={open} openChange={openChange}
            />
  )
}

export default Signup