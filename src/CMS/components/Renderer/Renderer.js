import React from "react";

import { useCMS } from "tinacms";

const Renderer = ({ content }) => {
	const cms = useCMS();

	console.log(cms);

	return (
		<>
			{Object.keys(content).map((key) => {
				if (key === "_pages" && content[key].length) {
					return <Renderer content={content[key][0]} />;
				}

				if (key === "_blocks") {
					let { _template, ...props } = content;
					let Component = cms.blocks.templates[_template];

					// return <Component {...props} />;
				}

				return <Renderer content={content[key]} />;
			})}
		</>
	);
};

export default Renderer;
