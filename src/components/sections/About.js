import image from "../../assets/foto1.png";

const About = () => {
	return (
		<div>
			<div className="section" id="about">
				<div className="flex ">
					<h1 className="title">
						About Me
						<hr className="border w-24 mx-auto border-principal mt-4 mb-2" />
						<hr className="border w-16 mx-auto border-principal" />
					</h1>
				</div>

				<div className="grid  grid-rows md:grid-cols-12 m-auto justify-center mb-7">
					<div className="col-span-6 lg:col-span-5">
						<img
							src={image}
							alt=""
							className="w-auto sm:w-2/5 md:w-3/5 m-auto"
							loading="lazy"
						/>
					</div>
					<div className="col-span-6  md:pl-5 my-auto">
						<p className="my-7">
							Hello! I’m Jack. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor
							nunc, vitae posuere nibh malesuada sed. In nec tortor eu nibh
							tristique vehicula sed in lectus. Phasellus vitae accumsan tortor.
							Fusce ac vestibulum ante.?
						</p>
						<h1 className="subtitle">Personal Details</h1>
						<ul>
							<li className="grid grid-cols-12 h-8">
								<strong className="col-span-6 text-principal">Name</strong>
								<p className="col-span-6">Fernely Veras</p>
							</li>
							<li className="grid grid-cols-12 h-8">
								<strong className="col-span-6 text-principal">Birthdate</strong>
								<p className="col-span-6">22-02-1999</p>
							</li>
							<li className="grid grid-cols-12 h-8">
								<strong className="col-span-6 text-principal">City</strong>
								<p className="col-span-6">Santo Domingo</p>
							</li>
							<li className="grid grid-cols-12 h-8">
								<strong className="col-span-6 text-principal">Country</strong>
								<p className="col-span-6">Dominican Republic</p>
							</li>
							<li className="grid grid-cols-12 h-8 ">
								<strong className="col-span-6 text-principal">Freelance</strong>
								<p className="col-span-6">Available</p>
							</li>
						</ul>
					</div>
				</div>

				<button
					className="flex btn "
					href="https://drive.google.com/file/d/1ctsLa-KAOMkyf33AvZ2fVse-xq6SlaTy/view?usp=sharing"
					target="_blank"
				>
					Download CV
				</button>
			</div>
		</div>
	);
};

export default About;
