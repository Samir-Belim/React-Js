import React from 'react'
import Person from './Person'
import Ternary from './components/Ternary'
import Ternary_and from './components/Ternary_and'
import Movies from './components/Movies'
import { movies } from './components/data'
import Meal from './components/Meal/Meal'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home'
import Courses from './components/Pages/Courses'
import Services from './components/Pages/Services'
import Profile from './components/Pages/Profile'
import Dashboard from './components/Pages/Dashboard'
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'

const App = () => {
  return (
    <>
      <div>
        {/*<Person name="Ahmed Khan" age={20} height="5.8 Foot"></Person>
      <Person name="Salman Khan" age={60} height="5.1 Foot"></Person>
      <Person name="Shahrukh Khan" age={45} height="5 Foot"></Person>
  */}
      </div>
      <div>
        {/*<Ternary name="Samir" age={100}></Ternary>*/}
      </div>
      <div>
        {/*}  <Ternary_and name="Samir Belim" pancard={true} Age={19}></Ternary_and>
        <Ternary_and name="Samir Belim" pancard={true} Age={19}></Ternary_and>
        <Ternary_and name="Samir Belim" pancard={false} Age={19}></Ternary_and>
      */}</div>

      <div>
        {/* <Movies></Movies>*/}
      </div>

      <div>
        {/*  <Meal></Meal>*/}
      </div>

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/profile" element={<Profile/>}/>                
              <Route path="/dashboard" element={<Dashboard/>}/>
           </Routes>
         </Router>
       
      </div>
       </>
     );
}

                  export default App