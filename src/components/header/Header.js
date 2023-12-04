import React, { useState } from 'react';
import './header.css'
import Logo from '../../images/emtlogo_new6';
import NavItems from './NavItems';
import JoinEmtpro from '../../images/emtpro-header-icon';
import HelpComponent from './HelpComponent';
import DownArrow from '../../images/down-arrow-5-svgrepo-com';
import Dialog from '../dialog/Dialog';
import HoverCard from '../hoverCard/HoverCard';
import Input from '../Input';
const navList = [
  {
    label: "FLIGHT"
  },
  {
    label: "HOTELS"
  },
  {
    label: "FLIGHT + HOTEL"
  },
  {
    label: "TRAINS"
  },
  {
    label: "BUS"
  },
  {
    label: "HOLIDAYS"
  },
  {
    label: "CABS"
  },
  {
    label: "ACTIVITIES"
  },

]

const Header = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted");
    if (password === confirmPassword) {
      (async () => {
        try {
          let res = await api.signup({ data: { name, email, password, appType: 'bookingportals' } })
          console.log(res);
        } catch (e) {
          console.log("error", e);
        }
      })()
    } else {
      alert('Invalid password match')
    }
  }

  return (
    <div className='flex flex-row border-2 border-green-500 h-[65px]'>
      <div className='flex flex-row'>
        <div><Logo /></div>
        <ul className='flex flex-row items-center list-none'>
          {navList.map((item) => <li key={item.label} className='p-[10px] border-r border-gray-500'><NavItems text={item.label} /></li>)}

          <li className='p-[10px]'><NavItems text={"More"} /></li>
        </ul>
      </div>
      <div className='flex flex-row'>
        <div>
          <JoinEmtpro />
        </div>
        <div className='flex flex-row items-center'>
          <div>
            <HelpComponent className={"helpline"} text={"24X7 Helpline"} icon={<DownArrow />} />
          </div>
          <div>
            <HelpComponent className={"flag"} text={"India"} icon={<DownArrow />} />
            <HoverCard trigger={<button><HelpComponent className={"profile"} text={"My Account"} icon={<DownArrow />} /></button>}>
              <div>
                <button onClick={() => setSignupDialog(true)}>Signup</button>
              </div>
              <div>
                <button onClick={() => setLoginDialog(true)}>Login</button>
              </div>
            </HoverCard>
            <Dialog
              title={"Login"}
              content={
                <form>
                  <div>
                    Email ID
                  </div>
                  <div>
                    <input type='text' className='dialog-div' placeholder='Enter email ID' />
                  </div>
                  <div>
                    Password
                  </div>
                  <div>
                    <input type='password' className='dialog-div' placeholder='password' />
                  </div>
                  <div>
                    <button className='continue-button'>CONTINUE</button>
                  </div>
                  <div>
                    <p className='terms-n-conditions'>By logging in, I understand & agree to EaseMyTrip
                      <span className='text-hyperlink'> terms of use</span> and <span className='text-hyperlink'>privacy policy</span>
                    </p>
                  </div>
                </form>
              }
              open={loginDialog} openChange={setLoginDialog}
            />
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
                    {/* <Input type='text' className='dialog-div' required placeholder='Enter your name' /> */}
                  </div>
                  <div>
                    Email ID
                  </div>
                  <div>
                    <Input placeholder={"Enter email ID"} type={'email'} required value={email} onChange={({ target }) => {
                      setEmail(target.value)
                    }} />
                    {/* <Input type='text' className='dialog-div' required placeholder='Enter email ID' /> */}
                  </div>
                  <div>
                    Password
                  </div>
                  <div>
                    <Input placeholder={"Enter a password"} type={'password'} required value={password} onChange={({ target }) => {
                      setPassword(target.value)
                    }} />
                    {/* <Input type='password' className='dialog-div' required placeholder='password' /> */}
                  </div>
                  <div>
                    Confirm Password
                  </div>
                  <div>
                    <Input placeholder={"Confirm password"} type={'password'} required value={confirmPassword} onChange={({ target }) => {
                      setConfirmPassword(target.value)
                    }} />
                    {/* <Input type='password' className='dialog-div' required placeholder='confirm password' /> */}
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
              open={signupDialog} openChange={setSignupDialog}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header