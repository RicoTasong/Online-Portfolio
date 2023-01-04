import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyResume from "./My Resume.pdf"
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";


const Home = ({theme,changeTheme}) => {
	return(
			<div className="container-fluid home" id="home">

				<div className="theme-change" onClick={changeTheme}>

					{theme === "light" ? (<p><BsFillMoonStarsFill size={30}/></p>):(<p className="sunIcon"><BsFillSunFill size={30}/></p>) }

				</div>


				<div className="container home-content">

					<Fade left>
						<h1>Hi! I am Rico Tasong</h1>
						<h3>
						<Typewriter
						  options={{
						    strings: ['Full Stack Software Developer','MERN Stack Developer','Front End Developer','Back End Developer'],
						    autoStart: true,
						    loop: true,
						    delay: 5
						  }}
						/>
						</h3>
					</Fade>

					<Fade bottom>
						<div className="button-for-action">
							<Link to="contact"
								spy={true}
								smooth={true}
							>
								<div className="hire-me-button">
										Hire Me 
								</div>
							</Link>
							<div className="get-resume-button">
								<a href={MyResume} download="Rico_T_resume">
									Get Resume
								</a>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		);
}

export default Home;