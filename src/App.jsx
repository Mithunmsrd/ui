import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'



//import rp from './assets/images/rp.png'
import Coursecards from './components/Coursecards.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Viewallcourses from './components/Viewallcourses.jsx'
import Addcourse from './components/Addcourse.jsx'
import Homepage from './Pages/Homepage.jsx'
import Coursepage from './Pages/Coursepage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
//import Contactpage from './Pages/Contactpage.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Mainlayout/Layout.jsx'



function App() {
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/"element={<Layout/>}/>
    <Route index element={<Homepage/>}/>
    <Route path ="/Courses"element={<Coursepage/>}/>
    <Route path ="*"element={<NotFoundPage/>}/> 
    <Route path= "contact" element={<Contact/>}/>
    <Route path='view' element = {<Viewallcourses/>}/>
    <Route path='add' element = {<Addcourse/>}/>
    </>
  )
)
  return (
    <>
    
   {/* <!-- navbar  --> */}
    {/* <Navbar />

   <Hero/>
  <Coursecards/> */}
   <RouterProvider router={router}/>

    </>
  )
}

export default App
