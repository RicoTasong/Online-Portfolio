import React from "react";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {

	const data = [

			{
				name: "Surigao State College of Technology",
				degree: "Bachelo of Science in Information Technology",
				year: "2015-2019",
				description: "With my degree, I was able to equip myself with the knowledge and skills to confidently take on challenging projects in the IT field. I was exposed to the latest trends and technologies through guest speakers and seminars. My college experience was highly rewarding and enabled me to pursue a career in IT and my passion for technology."
			},
			{
				name: "ZUITT Bootcamp",
				degree: "Full Stack Developer",
				year: "2022-2023",
				description: "I had a great experience during my two months of Bootcamp training. I was able to refresh my HTML and CSS coding skills, as well as tackle more complex topics such as JavaScript, MongoDB, and React JS. With the help of our instructors and peers, we were able to build an add-to-cart program that was both functional and aesthetically pleasing. It was a great learning experience and I am proud of what I was able to accomplish."
			},

		]

	return (
			<div className="container" id="education">
				<div className="section-title mt-5">
					<h5>Education</h5>
					<span className="line"></span>
				</div>


				<VerticalTimeline lineColor="#282828">

					{data.reverse().map((item, index)=> (

						<VerticalTimelineElement
						  className="vertical-timeline-element--work"
						  contentStyle={{ background: 'rgb(40, 40, 40)', color: '#282828' }}
						  contentArrowStyle={{ borderRight: '7px solid  rgb(48, 56, 65)' }}
						  date={item.year}
						  iconStyle={{ background: 'rgb(48, 56, 65)', color: '#FFFF' }}
						  icon={<FaGraduationCap />} key={index}
						>
						  <h3 className="vertical-timeline-element-title text-white title-description">{item.name}</h3>
						  <h5 className="vertical-timeline-element-subtitle text-white">{item.degree}</h5>

						  <p className="text-white">
						    {item.description}
						  </p>
						</VerticalTimelineElement>
					))}

				</VerticalTimeline>

			</div>
		);

};

export default Education;