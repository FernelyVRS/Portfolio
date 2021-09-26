import { useEffect, useState } from "react";
import Repo from "../Repo";

const Projects = () => {

	const [repos, setRepos] = useState([])
    
	const getRepos = async () => {

        const url = "https://api.github.com/users/FernelyVRS/repos";

		await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/vnd.github.mercy-preview+json",
			},
		})
			.then((response) => response.json())
			.then((data) => setRepos(data));
	};

	useEffect(() => {
		getRepos()
	}, []);

	return (
		<div>
			<div className="section" id="projects">
				<div className="flex flex-col-2">
					<h1 className="title ">
						Projects
						<hr className="border w-24 mx-auto border-red mt-4 mb-2 " />
						<hr className="border w-16 mx-auto border-red" />
					</h1>
				</div>

				<div className="grid grid-cols-1  md:grid-cols-2 gap-10">
					<Repo repos={repos} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
