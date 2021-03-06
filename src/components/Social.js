import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
	return (
		<div className="flex elements ">
			<div
				className="social"
				href="https://github.com/FernelyVRS"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub size="1.3rem" />
			</div>
            <div
				className="social"
				href="https://www.linkedin.com/in/fernely-veras/"
				target="_blank"
				rel="noreferrer"
			>
				<FaLinkedinIn size="1.3rem"/>
			</div>
		</div>
	);
};

export default Social;
