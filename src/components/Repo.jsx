import React from "react";

const Repo = (props) => {
	const elements = props.repos
		.filter((repo) => repo.stargazers_count !== 0)
		.map((filterRepo, index) => (
			<div className="col-span-1  w-auto h-auto" key={index}>
				<div className="bg-navy rounded-lg overflow-hidden shadow-2xl">
					<img
						className="w-full"
						src={`https://raw.githubusercontent.com/FernelyVRS/${filterRepo.name}/${filterRepo.default_branch}/screenshot.gif`}
						alt="Sunset in the mountains"
						loading="lazy"
					/>
					<div className="px-6 py-4">
						<div className="font-medium text-2xl mb-2 capitalize ">{filterRepo.name.replace(/-/g, " ")}</div>
						<p className="text-white text-base font-normal">{filterRepo.description}</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						{filterRepo.topics.map((topic, index) => {
							return (
								<span
									className="inline-block text-gray-400 rounded-full px-3 py-1 text-xs font-light bg-navy2 mr-2 mb-2 capitalize  "
									key={index}
								>
									{topic}
								</span>
							);
						})}
					</div>
					<div className="px-6 pt-4 flex mb-3">
						<div
							className="text-principal hover:underline font-medium cursor-pointer"
							href={filterRepo.html_url}
							target="_blank"
							rel="noreferrer"
						>
							Repository
						</div>
						<div className="border border-principal mx-3"></div>
						<div
							className={filterRepo.homepage === "" ? "text-gray-400 font-medium pointer-events-none" : "text-principal hover:underline font-medium cursor pointer"}
							href={filterRepo.homepage}
							target="_blank"
							rel="noreferrer"
						>
							Live
						</div>
					</div>
				</div>
			</div>
		));

	return <>{elements}</>;
};

export default Repo;
