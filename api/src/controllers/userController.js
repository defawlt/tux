// this is where we would normall use mongoose to import the user model, here wee need to replace with searching the Neo4j database.

// library to verify the token
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)



export const verifyAuthToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    return ticket.getPayload()
  } catch (err) {
    console.error('Error verifying auth token', err)
  }
}


