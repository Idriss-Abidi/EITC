// import React from 'react'
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Clubs from "./components/Clubs"
import Formation from "./components/Formations"
import Event from "./components/Event"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>  */}

     <div id="FirstDiv" className="container mb-10 mx-auto px-5 lg:px-20  overflow-visible">
     <Navbar />
     <Welcome/>
     <About />
     <Clubs/>
{/*      <Formation/> */}
     <Event/>
     <Contact/>
     </div>

    </div>
  )
}

export default App
// render(<App />, document.getElementById("root"));
