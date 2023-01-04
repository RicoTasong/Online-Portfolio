import React,{useState} from "react";
import "./NavFileMobileView.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { 

	FcHome,
	FcNightPortrait,
	FcTodoList,
	FcContacts,
	FcFactory,
	FcSalesPerformance
 } from "react-icons/fc";
 import {Link} from "react-scroll";
 import { MdBiotech,MdCastForEducation } from "react-icons/md";
import Switch from "react-switch"; 

const NavFileMobileView = ({theme,changeTheme}) =>{

	const [open,setOpen] = useState(false);

	const handleClick = ()=> {
		setOpen(!open)
	}

	return(

			<div className="mobile-view-navbar">
				<div className="navbar-header">
					<p><GiHamburgerMenu size={25} onClick={handleClick}/></p>
				</div>

				{ open ? (<div className="mobile-nav">
					 <ul>
					 	<li className="nav-item-mobileView">
					 		<Link to="home"
					 		spy={true}
					 		smooth={true}
					 		> 
					 			<FcHome size={25}/> Home 
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView">
					 		<Link to="about"
					 		spy={true}
					 		smooth={true}
					 		>
					 			 <FcNightPortrait size={25}/> About
					 		 </Link>
					 	</li>
					 	<li className="nav-item-mobileView">
					 		<Link to="techStack"
					 		spy={true}
					 		smooth={true}
					 		> 
					 			<MdBiotech color="orange" size={25}/> Teck Stack 
					 		</Link>
					 	 </li>
					 	 <li className="nav-item-mobileView"> 
					 		<Link to="project"
					 		spy={true}
					 		smooth={true}
					 		>
					 			<FcTodoList size={25}/> Project 
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView"> 
					 		<Link to="workExperience"
					 		spy={true}
					 		smooth={true}
					 		> 
					 			<FcFactory size={25}/> Experience
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView">
					 		<Link to="education"
					 		spy={true}
					 		smooth={true}
					 		>
					 			<MdCastForEducation size={25} color="yellowgreen"/> Education 
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView"> 
					 		<Link to="testimonial"
					 		spy={true}
					 		smooth={true}
					 		>
					 			<FcSalesPerformance size={25}/> Testimonial 
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView"> 
					 		<Link to="contact"
					 		spy={true}
					 		smooth={true}
					 		>
					 			<FcContacts size={25}/> Contact 
					 		</Link>
					 	</li>
					 	<li className="nav-item-mobileView"> 
					 		<Switch onChange={changeTheme} checked={theme==="light"} /> 
					 	</li>
					 </ul>
				</div>): null}

				


			</div>
		);

};

export default NavFileMobileView;
