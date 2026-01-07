import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)           // Using useContext to get user data from UserContext
                                                     // user data is fetched from context and displayed in this component
  if(!user) return <div>please login</div>

  return <div>Welcome {user.username}</div>          // Displaying the username from user data fetched from context
}

export default Profile
