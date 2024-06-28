import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'



//import rp from './assets/images/rp.png'
import Coursecards from './components/Coursecards.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Homepage from './Pages/Homepage.jsx'
import Coursepage from './Pages/Coursepage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'



function App() {
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/"element={<Homepage/>}/>
    <Route path ="/Courses"element={<Coursepage/>}/>
    <Route path ="*"element={<NotFoundPage/>}/> 
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
