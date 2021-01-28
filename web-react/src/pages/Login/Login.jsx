import React from 'react'
// GraphQLClient is a lightweight library to make requests. Im using this as a shortcut for now to work around using Apollo Client.
import { GraphQLClient } from 'graphql-request'
import { GoogleLogin } from 'react-google-login'

// get me query should return an id, name, email, picture
// const GET_ME_QUERY = `
//   {
//     currentUser {
//       userId
//       name
//       email
//       googleId
//     }
//   }
// `

const Login = () => {
  const onSuccess = async (googleUser) => {
    const idToken = googleUser.getAuthResponse().id_token
    const client = new GraphQLClient('http://localhost:4001/graphql', {
      headers: { authorization: idToken },
    })
    const data = await client.request(GET_ME_QUERY)
    console.log(data)
  }

  return (
    <GoogleLogin
      clientId="16853810299-vnm76hqk7719g7bmppdk6ei3oajgianu.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  )
}

export default Login
