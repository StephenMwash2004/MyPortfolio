import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Preliminary from "./Pages/Preliminary"
import Footer from "./Components/Footer"

function App(){
  return(
    <BrowserRouter>  
        <Navbar />

        <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/preliminary" element={<Preliminary />} />
        </Routes>

      <Footer />
        
    </BrowserRouter>
   
  )
}
export default App