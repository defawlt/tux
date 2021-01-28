// this is where we would normall use mongoose to import the user model, here wee need to replace with searching the Neo4j database.

// library to verify the token
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// exports.findOrCreateUser = async (token) => {
//   // verify auth token
//   const googleUser = await verifyAuthToken(token)
//   // check if user exists
//   const user = await checkIfUserExists(googleUser.email)
//   // if user exists, return them; otherwise, create new user in db
//   return user ? user : createNewUser(googleUser)
// }

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

// const checkIfUserExists = async (email) => {
//   // this is where I check the neo4j database for a user with an email that matches the email prop coming in.
// }

// const createNewUser = (googleUser) => {
//   const { name, email, picture } = googleUser
//   const user = { name, email, picture }
//   // create a new user in neo4j here.
// }
