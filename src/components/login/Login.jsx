import React, { useState } from 'react'
import Dialog from '../dialog/Dialog'
import Input from '../Input';
import api from '../../utils/api';
import useUser from '../../utils/useUser';

const Login = ({ open, openChange }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted");
    (async () => {
      try {
        let res = await api.login({ data: { email, password, appType: "bookingportals" } })
        console.log(res.data);
        setUser(res.data)
      } catch (error) {
        alert('error')
        console.log(error)
      }

    })()
  }

  return (
    <Dialog
      title={"Login"}
      content={
        <form onSubmit={handleSubmit}>
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

export default Login