import React from 'react'
import logo from '../../assets/images/logo.png'
function Header() {
  return (
    <div className='absolute px-37 py-6 z-50 w-full'>
      <img className='w-38 z-1' src={logo} alt="" />
    </div>
  )
}

export default Header
