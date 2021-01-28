import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'

const Login = () => {
  const onSuccess = (googleUser) => {
    console.log(googleUser)
  }
  return (
    <GoogleLogin
      clientId="16853810299-vnm76hqk7719g7bmppdk6ei3oajgianu.apps.googleusercontent.com"
      onSuccess={onSuccess}
    />
  )
}

export default Login
