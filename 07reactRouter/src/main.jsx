import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import User from '../components/User/User.jsx'
import Github from '../components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <  Layout />,      // Layout component is used here to wrap the main content with Header and Footer.
//     children: [
//       {
//         path: '/',
//         element: <Home />    // Home component is rendered when the path is '/'.
//       },
//       {
//         path: 'about',
//         element: <About />    // About component is rendered when the path is '/about'.
//       },
//       {
//         path: 'contact',
//         element: <Contact />    // Contact component is rendered when the path is '/contact'.
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>
      <Route path = "" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = "user/:userid" element = {<User />} />
      <Route
      path = "github" 
      element = {<Github />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />        // ReactProvider is a component that provides routing context to the application and it requires a 'router' prop to function correctly.
  </StrictMode>,
)
