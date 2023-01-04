import React from 'react';
import "./SidebarList.css";
import profilepic from "../../Image/me2.JPG";
import { 

	FcHome,
	FcNightPortrait,
	FcTodoList,
	FcContacts,
	FcFactory,
	FcSalesPerformance
 } from "react-icons/fc";

 import { MdBiotech,MdCastForEducation } from "react-icons/md";
import {Link} from "react-scroll";

const	SidebarList = ({expandSidebar}) =>{
	return (

		<React.Fragment>

			{expandSidebar ? (
					<div className='navbar-items'>
						<div className='sidebar-profile-pic'>
							<img src={profilepic} alt="MyPhoto"/>
						</div>

						<ul>
							<li className="nav-item">
								<Link to="home"
								spy={true}
								smooth={true}
								> 
									<FcHome size={25}/> Home 
								</Link>
							</li>
							<li className="nav-item">
								<Link to="about"
								spy={true}
								smooth={true}
								>
									 <FcNightPortrait size={25}/> About
								 </Link>
							</li>
							<li className="nav-item">
								<Link to="techStack"
								spy={true}
								smooth={true}
								> 
									<MdBiotech color="orange" size={25}/> Teck Stack
								</Link>
							 </li>
							 <li className="nav-item"> 
								<Link to="project"
								spy={true}
								smooth={true}
								>
									<FcTodoList size={25}/> Project 
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="workExperience"
								spy={true}
								smooth={true}
								> 
									<FcFactory size={25}/> Experience 
								</Link>
							</li>
							<li className="nav-item">
								<Link to="education"
								spy={true}
								smooth={true}
								>
									<MdCastForEducation size={25} color="yellowgreen"/> Education 
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="testimonial"
								spy={true}
								smooth={true}
								>
									<FcSalesPerformance size={25}/> Testimonial 
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="contact"
								spy={true}
								smooth={true}
								>
									<FcContacts size={25}/> Contact 
								</Link>
							</li>
						</ul>





					</div>
				) : (

					<div className="navbar-items-only-icons">
						<ul>
							<li className="nav-item">
								<Link to="home"
								spy={true}
								smooth={true}
								> 
									<FcHome size={25}/>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="about"
								spy={true}
								smooth={true}
								>
									 <FcNightPortrait size={25}/>
								 </Link>
							</li>
							<li className="nav-item">
								<Link to="techStack"
								spy={true}
								smooth={true}
								> 
									 <FcFactory size={25}/>
								</Link>
							 </li>
							 <li className="nav-item"> 
								<Link to="project"
								spy={true}
								smooth={true}
								>
									<FcTodoList size={25}/>
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="workExperience"
								spy={true}
								smooth={true}
								> 
									<MdBiotech color="orange" size={25}/> 
								</Link>
							</li>
							<li className="nav-item">
								<Link to="education"
								spy={true}
								smooth={true}
								>
									<MdCastForEducation size={25} color="yellowgreen"/>
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="testimonial"
								spy={true}
								smooth={true}
								>
									<FcSalesPerformance size={25}/>
								</Link>
							</li>
							<li className="nav-item"> 
								<Link to="contact"
								spy={true}
								smooth={true}
								>
									<FcContacts size={25}/>
								</Link>
							</li>
						</ul>
					</div>
				)}
	
		</React.Fragment>

	);
};

export default SidebarList