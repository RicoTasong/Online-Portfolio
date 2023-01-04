import React,{useState} from "react";
import "./Contact.css"
import { RiSendPlaneFill } from 'react-icons/ri';

import Fade from 'react-reveal/Fade';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Contact = () =>{

	const API = "https://portfolio-server-eljr.onrender.com/sendemail";

	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [jobtypes, setJobtypes] = useState();
	const [message, setMessage] = useState();

	const sendemailInfo = ()=>{
		fetch(API,{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				jobtypes,
				message,
			}),

		})
		.then((res) => res.json())
		.then((result)=>{

			if (result.error) {

				toast.error(result.error, {
					position: toast.POSITION.TOP_RIGHT
				})
				
			}else{
				toast.success(`Your email has been sent`, {
					position: toast.POSITION.TOP_RIGHT
				})
				setName("");
				setEmail("");
				setJobtypes("");
				setMessage("");
			}
		})
		.catch((err) => {
			console.log(err);
		})
	};


	return(

		<div className="container contact-section mt-md-5 pt-5" id="contact">

			<div className="row">
				<Fade bottom>
					<div className="col-xl-5 col-lg-5 d-none d-lg-block">
						<div className="contact-form-image">
							<img src="https://mta-site-cms.s3.us-west-2.amazonaws.com/man_sending_emails_at_computer_hero_d288085b72.png" alt="Contact Form"/>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">

						<div className="contact-form-design">
							<div className="text-center">
								<h5>Contact me</h5>
							</div>
							<form>
								<div className="Contact-form">
									<label className="form-label">Name</label>
									<input type="text" className="form-control"

										value={name}
										onChange={(e)=>setName(e.target.value)}

									/>
								</div>

								<div className="Contact-form">
									<label className="form-label">E-mail</label>
									<input type="email" className="form-control"

										value={email}
										onChange={(e)=>setEmail(e.target.value)}
									/>
								</div>

								<div className="Contact-form">
									<label className="form-label">Job Types</label>
									<select className="custom-select-tag form-control"

										value={jobtypes}
										onChange={(e)=>setJobtypes(e.target.value)}
									>
										<option>Full-time</option>
										<option>Working student</option>
										<option>Part time</option>
										<option>Contract</option>
									</select>
								</div>

								<div className="Contact-form">
									<label className="form-label">Message</label>
									<textarea rows="4" type="text" className="form-control"

										value={message}
										onChange={(e)=>setMessage(e.target.value)}
									/>
								</div>

								<div className="button-submit" onClick={sendemailInfo}>
									<p>Send <RiSendPlaneFill size={20}/></p>
								</div>
							</form>
						</div>

					</div>
				</Fade>
			</div>

			<ToastContainer autoClose={8000}/>
		</div>


		);

}

export default Contact;