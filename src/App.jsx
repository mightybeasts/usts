import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar,Tech,StarsCanvas,Footer,Partners} from './components'
import { useState,useEffect } from "react";


const App = ()=> {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
    
    
    
    
    <div className="relative bg-black z-0">
      <Navbar  />  
      
        
        <Hero />
      
      <About />

      <Partners/>
      
     

      <Tech/>
      <Contact />
      <Footer/>
        
      <StarsCanvas/>
      
    </div>
    
      
   
  </BrowserRouter>
  )

  }
export default App
