import React from "react";

import * as Iconn from "react-icons/si";
import skills from "../../config/Data";

const Skills = () => {
	
	const Frontend = skills.skills.frontend.map((item, index)  => {

		const Icon = Iconn[item.icon]
		const Card = React.createElement(Icon, {color:`${item.color}`, size:"3rem" }, null);

		
		return (
			<div className="flex flex-col rounded-lg h-32 w-32 justify-start bg-navy  shadow-2xl p-3 duration-300 mx-1 mb-4 " key={index}>
				<div className=" m-auto" >
					
					{Card}
				</div>
				<div className="m-auto my-1 ">
					<span>{item.name}</span>
				</div>
			</div>
		);
	});
	
	const Backend = skills.skills.backend.map((item, index)  => {

		const Icon = Iconn[item.icon]
		const Card = React.createElement(Icon, {color:`${item.color}`, size:"3rem" }, null);

		
		return (
			<div className="flex flex-col rounded-lg h-32 w-32 justify-start bg-navy  shadow-2xl p-3 duration-300 mx-1 mb-4 " key={index}>
				<div className=" m-auto" >
					
					{Card}
				</div>
				<div className="m-auto my-1 ">
					<span>{item.name}</span>
				</div>
			</div>
		);
	});

	const Tools = skills.skills.tools.map((item, index)  => {

		const Icon = Iconn[item.icon]
		const Card = React.createElement(Icon, {color:`${item.color}`, size:"3rem" }, null);

		
		return (
			<div className=" flex flex-col rounded-lg h-32 w-32 justify-start bg-navy  shadow-2xl p-3 duration-300 mx-1 mb-4 " key={index}>
				<div className=" m-auto" >
					
					{Card}
					
				</div>
				<div className="m-auto my-1 ">
					<span>{item.name}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="bg-navy2" id="skills">
			<div className="section">
				<div className="flex flex-col-2">
					<h1 className="title ">
						Skills
						<hr className="border w-24 mx-auto border-red mt-4 mb-2 " />
						<hr className="border w-16 mx-auto border-red" />
					</h1>
				</div>
				<div className="flex flex-col text-sm">
					
					<div>
						<h1 className="text-center subtitle my-6">Frontend</h1>
						<div className="flex flex-wrap justify-center ">
							
							{Frontend}
							
						</div>
					</div>
					<div>
						<h1 className="text-center subtitle my-6">Backend</h1>
						<div className="flex flex-wrap justify-center ">
							
							{Backend}

						</div>
					</div>
					<div>
						<h1 className="text-center subtitle my-6">Tools</h1>
						<div className="flex flex-wrap justify-center ">
							
							{Tools}

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
