import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";
import Zoom from 'react-reveal/Zoom';


const Project = () => {


	const data = [

			{
				name: "To-Do-List Application",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. Donec malesuada cursus mi, eget hendrerit sapien ullamcorper eget. Ut tristique erat eros, vitae tempor massa pulvinar ut. Vestibulum vulputate interdum leo, ut vulputate quam auctor sit amet.",
				projectLink: "https://www.linkedin.com/in/rico-tasong-7640401b9/",
				techused: [

						{
							techname: "Node js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "React js"
						},	
					]
			},
			{
				name: "MERN Stack Event Management Portal",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. Donec malesuada cursus mi, eget hendrerit sapien ullamcorper eget. Ut tristique erat eros, vitae tempor massa pulvinar ut. Vestibulum vulputate interdum leo, ut vulputate quam auctor sit amet.",
				projectLink: "https://www.linkedin.com/in/rico-tasong-7640401b9/",
				techused: [

						{
							techname: "Node js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "React js"
						},	
					]
			},
			{
				name: "MERN Stack Social Media",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. Donec malesuada cursus mi, eget hendrerit sapien ullamcorper eget. Ut tristique erat eros, vitae tempor massa pulvinar ut. Vestibulum vulputate interdum leo, ut vulputate quam auctor sit amet.",
				projectLink: "https://www.linkedin.com/in/rico-tasong-7640401b9/",
				techused: [

						{
							techname: "Node js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "React js"
						},	
						{
							techname: "Typescript"
						},	
					]
			},
			{
				name: "MERN Stack Live Streaming",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. Donec malesuada cursus mi, eget hendrerit sapien ullamcorper eget. Ut tristique erat eros, vitae tempor massa pulvinar ut. Vestibulum vulputate interdum leo, ut vulputate quam auctor sit amet.",
				projectLink: "https://www.linkedin.com/in/rico-tasong-7640401b9/",
				techused: [

						{
							techname: "Node js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "React js"
						},	
					]
			},
			{
				name: "MERN Stack Ecommerce website		",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. Donec malesuada cursus mi, eget hendrerit sapien ullamcorper eget. Ut tristique erat eros, vitae tempor massa pulvinar ut. Vestibulum vulputate interdum leo, ut vulputate quam auctor sit amet.",
				projectLink: "https://www.linkedin.com/in/rico-tasong-7640401b9/",
				techused: [

						{
							techname: "Node js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "React js"
						},	
					]
			}


		];


	return (

		<div className="container" id="project">

			<div className="section-title mt-5 mb-5">
				<h5>Project</h5>
				<span className="line"></span>
			</div>

			
			<div className="row justify-content-center">
				{data.map((item, index) => (
					<Zoom clear key={index}>
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							<ProjectList {...item}/>
						</div>
					</Zoom>
				))}
			</div>
			

		</div>

		);
};
export default Project;