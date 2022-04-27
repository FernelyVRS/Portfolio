import React from "react";
import * as Icons from "react-icons/si";

const Icon = (props) => {
	const { name, icon, color } = props.icon;

	const IconElement = Icons[icon];

	return (
		<div className="flex flex-col rounded-lg h-32 w-32 justify-start bg-navy  shadow-2xl p-3 duration-300 mx-1 mb-4 ">
			<div className=" m-auto">
				<IconElement color={color} size="3rem" />
			</div>
			<div className="m-auto my-1 ">
				<span>{name}</span>
			</div>
		</div>
	);
};

export default Icon;
