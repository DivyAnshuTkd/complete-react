import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.
    status)                                                // get auth status from redux store
  
  // useNavigate is used to go from one page to another using JavaScript.
  const navigate = useNavigate()           // for navigation. writing the way we write for dispatch

  // Meaning of active
  
  // false → user is NOT active (not logged in)
  // true → user is active (logged in / authenticated)

  const navItems = [                     // navigation items for header. Usually they are stored in array of objects
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>                                                // Container keeps content centered and prevents it from spreading across the whole screen.
        <nav className='flex'>
          <div className = 'mr-4'>
            <Link to='/'>                                        // Link is used to navigate to different routes without reloading the page
            <Logo width='70px'>

            </Logo>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (                                       // if user is active, then only render the list item
              <li key={item.name}>                                // key is used to give a unique identity to each list item in react
                <button 
                onClick={() => navigate(item.slug)}               // on clicking the button, navigate takes the item to the slug path which is given as an argument to navigate. This means when user clicks on Home button, navigate('/') is called which takes the user to home page. In short, changes URL, loads new page without reloading the app.
                className='inline-block px-6 py-2
                duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}               
                </button>                
              </li>
            ) : null
            )}

            {/* Clicking the button calls navigate(path), which changes the URL and shows the matching page without reloading the app. */}

            {authStatus && (                       // this is the syntx for conditional rendering in react. This means if authStatus is true(i.e. when user is authenticated), then only render the LogoutBtn component
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header



// 🔹 What this Header component does (Big Picture)

// Shows a navigation bar

// Reads authentication status from Redux

// Shows Login / Signup when user is not logged in

// Shows All Posts / Add Post / Logout when user is logged in

// Navigates without page reload