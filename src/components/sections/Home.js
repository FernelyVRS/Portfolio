import React from "react";

import backgroundImg from "../../assets/backgroundhome2.jpg";
import Social from "../Social";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			className=" bg-cover bg-center " 
			id="home"
			style={{ backgroundImage: `url(${backgroundImg})` }}
		>
			<div className=" bg-navy bg-opacity-70">
				<div className="flex section h-screen">
					<div className="m-auto">
						<div className="mt-20 md:ml-0 md:mr-4 animate__animated animate__fadeIn">
							<Social/>
						</div>

						<p className="text-3xl sm:text-4xl mt-6  elements animate__animated animate__fadeInRight">
							Fernely Veras
						</p>
						<p className="title text-3xl sm:text-5xl mt-4 mb-8 elements animate__animated animate__fadeInRight animate__delay-1s">
							Software Developer
						</p>
						

						<button className="flex btn bg-principal animate__animated animate__fadeIn animate__delay-2s">
							<Link
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-15}
								duration={500}
							>
								Contact Me
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
