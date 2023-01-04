import React,{useState,createContext} from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import About from "./Component/About/About";
import Techstack from "./Component/TechStack/Techstack";
import Project from "./Component/Projects/Project";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import Education from "./Component/Education/Education";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import NavFileMobileView from "./Component/Sidebar/NavFileMobileView";
import "./App.css"



export const ThemContext = createContext(null);


const App = ()=>{

  const [theme,setTheme] = useState("light");

  const changeTheme = () =>{
    setTheme((prev) => (prev === "light" ? "dark":"light"));
  }

  return(    
      <ThemContext.Provider value={{theme,changeTheme}}>

        <div id={theme}>
          <NavFileMobileView changeTheme={changeTheme} theme={theme}/>
          <Sidebar changeTheme={changeTheme} theme={theme}/> 
          <About/> 
          <Techstack/>
          <Project/> 
          <WorkExperience/>
          <Education/>
          <Testimonial/>
          <Contact/>
        </div>
       
        <ScrollToTop smooth 
        top="600"
        color="white"
        height="20"
        width="20"
        style={{borderRadius: "90px",backgroundColor: "tomato"}}
        />
      </ThemContext.Provider>
    );
}

export default App;