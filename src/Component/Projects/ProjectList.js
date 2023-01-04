import React,{useState} from "react";
import { FcExpand,FcCollapse } from "react-icons/fc";


const ProjectList = ({ name, des, projectLink, techused }) => {



	const [show, setShow] = useState(false);

	const handleShowandCollapse = () => {
		setShow(!show);
	}


	return(
		<div className={show ? "show-project-list-opened project-list" : "project-list"}
		 onClick={handleShowandCollapse}>
			<div className="title-and-collapse-option">
				<h5>{name}</h5>
				<p>
					{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
				</p>
			</div>

			{show ? (<p className="text-justify text-decription">{des}</p>) : (<p className="text-justify text-decription">{des.substring(0,150)}...</p>)}

			

			<div className="row">
				
				{techused && techused.map((item, index) => (

					<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12"key={index}>
						<div className="tech-used-in-project">
							<p>{item.techname}</p>
						</div>
					</div>

				))}
				
			</div>

			<div className="live-demo-button">
				<a href={projectLink} target="_">Live Demo</a>
			</div>
			
		</div>
		);
};

export default ProjectList; 