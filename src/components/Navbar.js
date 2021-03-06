import React, { useState, useEffect } from "react";
import { navbar } from "../config/Data";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hiddeMenu = () => {
			if (window.innerWidth > 1023 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", hiddeMenu);

		return () => {
			window.removeEventListener("resize", hiddeMenu);
		};
	});

	return (
		<div className="bg-navy shadow fixed w-full animate__animated animate__fadeInDownBig z-10" >
			<nav
				className="navbar flex  items-center justify-between h-20  text-2x1"
				role="navigation"
			>
				<div onClick={() => scroll.scrollToTop()}>
					<h1 className="font-title text-4xl cursor-pointer">FV</h1>
				</div>

				<div className="cursor-pointer" onClick={toggle}>
					<svg
						className="w-10 h-10 lg:hidden"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
				<div className="text-lg hidden lg:flex ">
					{navbar.map(({ name, link }, key) => {
						return (
							<Link
								activeClass="active"
								to={link}
								spy={true}
								smooth={true}
								offset={-15}
								duration={500}
								key={key}
								className="block hover:text-red mt-4 lg:inline-block lg:mt-0 mx-2 p-2 duration-300 cursor-pointer"
							>
								{name}
							</Link>
						);
					})}
				</div>
			</nav>

			<div
				className={
					isOpen ? "grid grid-rows text-center items-center bg-navy" : "hidden"
				}
				onClick={toggle}
			>
				{navbar.map(({ name, link }, key) => {
					return (
						<Link
							activeClass="active"
							to={link}
							spy={true}
							smooth={true}
							offset={-15}
							duration={500}
							key={key}
							className="block text-white hover:text-red mt-4 lg:inline-block lg:mt-0 mx-2 p-2 duration-300 cursor-pointer"
						>
							{name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
