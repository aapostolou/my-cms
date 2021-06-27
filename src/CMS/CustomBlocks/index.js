import CustomBlock from "./CustomBlock";

import TitleBlock from "components/TitleBlock";

const customBlocks = {
	"title-block": TitleBlock
};

const registerBlocks = (cms) => {
	cms.blocks = new CustomBlock();

	Object.keys(customBlocks).forEach((key) => {
		cms.blocks.add({ key, Component: customBlocks[key] });
	});
};

export { registerBlocks };
