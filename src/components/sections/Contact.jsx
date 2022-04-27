import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"gmailService",
				"template_089a05b",
				e.target,
				"user_k2Moe2kW4j3SlDL0yy4mF"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<div className="bg-navy2" id="contact">
			<div className="section">
				<div className="flex flex-col-2">
					<h1 className="title ">
						Contact Me
						<hr className="border w-24 mx-auto border-principal mt-4 mb-2 " />
						<hr className="border w-16 mx-auto border-principal" />
					</h1>
				</div>
				<div>
					<form onSubmit={sendEmail} autoComplete="off">
						<div className="grid md:grid-cols-2 md:gap-5">
							<input
								name="name"
								type="text"
								className="w-full h-16 my-3 rounded-lg placeholder-gray-400 text-gray-200 py-4  px-4 pl-12 bg-navy focus:outline-none focus:ring-principal focus:ring"
								placeholder="Name"
								required
							/>
							<input
								name="email"
								type="email"
								className="w-full h-16 my-3 rounded-lg placeholder-gray-400 text-gray-200 py-4  px-4 pl-12 bg-navy focus:outline-none focus:ring-principal focus:ring"
								placeholder="Email Address"
								required
							/>
						</div>

						<input
							name="subject"
							type="text"
							className="w-full h-16 my-3 rounded-lg placeholder-gray-400 text-gray-200 py-4  px-4 pl-12 bg-navy focus:outline-none focus:ring-principal focus:ring"
							placeholder="Subject"
							required
						/>

						<textarea
							name="message"
							type="text"
							className="w-full h-32 my-3 rounded-lg placeholder-gray-400 text-gray-200 py-4  px-4 pl-12 bg-navy focus:outline-none focus:ring-principal focus:ring"
							placeholder="Message"
							required
						/>

						<button className="flex btn md:ml-0 mt-3">Send Message</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
