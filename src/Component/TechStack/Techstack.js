import React,{useState} from "react";
import "./Techstack.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Techstack = () => {

	const data=[
			{
				name: "JavaScript"
			},
			{
				name: "Node JS"
			},
			{
				name: "Express JS"
			},
			{
				name: "MongoDB"
			},
			{
				name: "React JS"
			},
			{
				name: "HTML 5"
			},
			{
				name: "CSS"
			},
			{
				name: "MySql"
			},
			{
				name: "PHP"
			},
		
		];
	
	const [showMoreTechStack,setShowMoreTechStack] = useState(6);

	const loadMore = () => {
		setShowMoreTechStack((prev)=>prev+3);
	}
	return(
			<div className="container techstack-section" id="techStack">
				<div className="section-title">
					<h5>Tech Stack</h5>
					<span className="line"></span>
				</div>

				<div className="row justify-content-center">

					{data.slice(0,showMoreTechStack).map((item,index)=> (
						<Fade right key={index}>
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

								<div className={index === 0 ? "tech-content-marked tech-content" : "tech-content"}>	
									<span className="tech-number bg-secondary" key={index}>
										{index+1}
									</span>
									<p>{item.name}</p>
								</div>	

							</div>
						</Fade>
					))}

				</div>

				{showMoreTechStack >= data.length ? null : (
					<Zoom>
						<span className="load-more-tech-stack" onClick={loadMore}>
							Load More...
						</span>
					</Zoom>
				)}
			</div>
		);
}

export default Techstack;