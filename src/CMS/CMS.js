import React, { useState } from "react";

import { TinaCMS, TinaProvider } from "tinacms";
import { registerFields } from "./CustomFields";
import { registerBlocks } from "./CustomBlocks";

import { TinaForm } from "./components";
import { formData } from "pages/_templates";

import content from "content.json";

const cms = new TinaCMS({
	enabled: true,
	sidebar: {
		position: "displace"
	}
});

/* Register Custom Fields */
registerFields(cms);
/* Register Custom Fields */
registerBlocks(cms);

const CMS = ({ children }) => {
	const [r, setRerender] = useState(0);

	cms.onFormChange = () => {
		setRerender(r + 1);
	};
	cms.onFormSubmit = () => {};

	return (
		<TinaProvider cms={cms} styles={{ background: "red" }}>
			<TinaForm {...formData} initialValues={content} />
			{React.Children.map(children, (child) => React.cloneElement(child, {}))}
		</TinaProvider>
	);
};

export default CMS;
