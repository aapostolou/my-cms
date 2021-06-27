import React from "react";

import { useCMS, useForm, usePlugin } from "tinacms";

import Renderer from "../Renderer/";

const TinaForm = ({ id, label, fields, initialValues }) => {
	const cms = useCMS();

	const formConfig = {
		id,
		label,
		fields,
		initialValues,
		onChange: (newValues) => {
			Object.keys(newValues.values).forEach((key) => {
				initialValues[key] = newValues.values[key];
			});
			cms?.onFormChange?.(newValues.values);
		},
		onSubmit: () => {
			cms?.onFormSubmit?.();
		}
	};

	const [content, form] = useForm(formConfig);
	usePlugin(form);

	return (
		<>
			<pre>{JSON.stringify(content, null, 2)}</pre>
			<Renderer content={content} />
		</>
	);
};

export default TinaForm;
