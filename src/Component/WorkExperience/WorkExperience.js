import React from "react";
import "./WorkExperience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdGroupWork} from "react-icons/md";

const WorkExperience = () => {

	const data =[];

			/*{
				companyname: "Youtube",
				position: "Full Stack Developer",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. .",
				year: "2018-2019",
				techskills:[
						{
							techname: "Node js"
						},
						{
							techname: "React js"
						},
						{
							techname: "Express js"
						},
					]
			},

			{
				companyname: "Google",
				position: "Back End Developer",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. .",
				year: "2019-2020",
				techskills:[
						{
							techname: "Javascript"
						},
						{
							techname: "CSS"
						},
						{
							techname: "PHP"
						},
					]
			},

			{
				companyname: "Facebook",
				position: "Front End Developer",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. .",
				year: "2020-2021",
				techskills:[
						{
							techname: "Node js"
						},
						{
							techname: "React js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "Typesscript"
						},
					]
			},

			{
				companyname: "Microsoft",
				position: "Full Stack Developer",
				des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada. .",
				year: "2021-2022",
				techskills:[
						{
							techname: "Javascript"
						},
						{
							techname: "React js"
						},
						{
							techname: "Express js"
						},
						{
							techname: "MongoDB"
						},
					]
			},


		]*/

	return(

			<div className="container" id="workExperience">

				<div className="section-title mt-5">
					<h5>Work Experience</h5>
					<span className="line"></span>
				</div>

				<VerticalTimeline lineColor="#282828">

					{data.reverse().map((item, index)=> (

						<VerticalTimelineElement
						  className="vertical-timeline-element--work"
						  contentStyle={{ background: 'rgb(40, 40, 40)', color: '#282828' }}
						  contentArrowStyle={{ borderRight: '7px solid  rgb(48, 56, 65)' }}
						  date=<p className="date-class">{item.year}</p>
						  iconStyle={{ background: 'rgb(48, 56, 65)', color: '#FFFF' }}
						  icon={<MdGroupWork />} key={index}
						>
						  <h3 className="vertical-timeline-element-title text-white">{item.companyname}</h3>
						  <h5 className="vertical-timeline-element-subtitle text-white">{item.position}</h5>

						  <div className="row">
						  	{item.techskills.reverse().map((tech, index) => (

						  		<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
						  			<div className="tech-skills">
						  				<p className="text-white">{tech.techname}</p>
						  			</div>
						  		</div>

						  	))}
						  </div>

						  <p className="text-white">
						    {item.des}
						  </p>
						</VerticalTimelineElement>
					))}

				</VerticalTimeline>

			</div>
		)

};

export default WorkExperience;