import React from "react";
import Social from "./Social";

import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<div className="relative text-white">
			<div className="flex justify-center mb-4">
				<div className="flex absolute rounded-full h-14 w-14 items-center justify-center bg-principal  -top-7 cursor-pointer">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={-15}
						duration={800}
					>
						<FaAngleUp size="2rem" />
					</Link>
				</div>
			</div>
			<div className="py-10 ">
				<div className="flex justify-center">
					<Social />
				</div>
				<div>
					<p className="text-center mt-4">Made by Fernely Veras ©2021</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
