import React from "react";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Profilepic1 from "./img/langga.jpg";
import Profilepic2 from "./img/mark.jpg";
import Profilepic3 from "./img/korjo.jpg";
import Profilepic4 from "./img/tata.jpg";
import Profilepic5 from "./img/wawa.jpg";





const Testimonial = () => {

	const data = [];

		// 	{
		// 		name: "Christine",
		// 		position: "CEO",
		// 		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada.",
		// 		img: Profilepic1
		// 	},
		// 	{
		// 		name: "James",
		// 		position: "Product Manager",
		// 		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada.",
		// 		img: Profilepic4
		// 	},
		// 	{
		// 		name: "KingWalther",
		// 		position: "Marketing Manager",
		// 		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada.",
		// 		img: Profilepic5
		// 	},
		// 	{
		// 		name: "Mark",
		// 		position: "CTO",
		// 		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada.",
		// 		img: Profilepic2
		// 	},
		// 	{
		// 		name: "Jay R",
		// 		position: "Full Stack Developer",
		// 		des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue sapien et erat vulputate, sit amet dictum ipsum malesuada.",
		// 		img: Profilepic3
		// 	}


		// ];

	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

	return(

			<div className="container testimonial-section" id="testimonial">
				<div className="section-title">
					<h5>Testimonial</h5>
					<span className="line"></span>
				</div>

				<div className="testimonial-slider">

					<Slider {...settings}>

						{data.map((item,index)=>(


							<div className="content-slider-main" key={index}>
								<div className="content-slider">

									<img src={item.img} alt="Testimonial" className="center-image"/>
									<p className="text-justify">{item.des}</p>
									<p>{item.name}</p>
									<p>{item.position}</p>

								</div>
							</div>

						))}

					</Slider>

				</div>
			</div>

		)

}

export default Testimonial