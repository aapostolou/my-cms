import { BlockTemplate as SimplePageTemplate } from "./simple-page";

const defaultFields = [
	{
		label: "ID",
		name: "id",
		component: "identifier",
		validate: (value) => {
			if (!value) return "*field required";
			if (/[_$]/.test(value)) return "*invalid 'page' identifier";
		}
	},
	{
		label: "Label",
		name: "label",
		component: "text",
		validate: (value) => {
			if (!value) return "*field required";
		}
	},
	{
		label: "Route",
		name: "route",
		component: "route",
		validate: (value) => {
			if (!value) return "*field required";
		}
	}
];

const formData = {
	id: "pages",
	label: "Edit Pages",
	fields: [
		{
			name: "_pages",
			label: "Pages",
			component: "blocks",
			templates: {
				"simple-page": {
					...SimplePageTemplate,
					fields: [...defaultFields, ...SimplePageTemplate.fields]
				}
			}
		}
	],
	initialValues: {}
};

export { formData };
