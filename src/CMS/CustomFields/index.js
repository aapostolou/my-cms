import { RouteField } from "./Route";
import { IdentifierField } from "./Identifier";

const customFields = [RouteField, IdentifierField];

const registerFields = (cms) => {
	customFields.forEach((field) => {
		cms.fields.add(field);
	});
};

export { registerFields };
