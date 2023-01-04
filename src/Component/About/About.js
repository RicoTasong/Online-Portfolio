import React from 'react';
import "./About.css"
import Profilepic from "../../Image/me3.jpeg";
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<Fade bottom>
			<div className='container about-section' id="about">
				
				<div className='row'>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div className="about-image">
							<img src={Profilepic} alt="Profile"/>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
						<div className='about-details text-center'>
							<div className="about-title">
								<h5>About Me</h5>
								<span className="line"></span>
							</div>
							<p className="text-justify">
								I'm a passionate full-stack developer, driven to create efficient, 
								user-friendly web applications. 
								With experience in front-end and back-end development, I'm skilled at developing robust, responsive user experiences. 
								My technical proficiency, determination to learn and grow and collaborative nature make me an invaluable asset to any development team.
							</p>
						</div>
					</div>
				</div>
				
			</div>
		</Fade>
		);
};

export default About;