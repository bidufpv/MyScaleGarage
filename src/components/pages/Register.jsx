import React from 'react'
import { SignUp } from '@clerk/clerk-react'

export function Register() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignUp signInUrl="/login"/>
    </div>
  )
}

