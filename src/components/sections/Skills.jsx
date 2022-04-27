import React from "react";
import { Data } from "../../config/Data";
import Icon from "../Icon";

const Skills = () => {
			
	const Frontend = Data.skills.frontend.map((item, index)  => {
					
		return ( <Icon icon={item} key={index}/> );
	});
	
	const Backend = Data.skills.backend.map((item, index)  => {
				
		return ( <Icon icon={item} key={index}/> );
	});

	const Tools = Data.skills.tools.map((item, index)  => {
		
		return ( <Icon icon={item} key={index}/> );
	});
	
	return (
		<div className="bg-navy2" id="skills">
			<div className="section">
				<div className="flex flex-col-2">
					<h1 className="title ">
						Skills
						<hr className="border w-24 mx-auto border-principal mt-4 mb-2 " />
						<hr className="border w-16 mx-auto border-principal" />
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
