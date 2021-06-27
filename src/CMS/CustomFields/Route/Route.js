import React from "react";
import { Input } from "tinacms";

import styles from "./Route.module.scss";

const Route = ({ input, meta, field }) => {
	const handleOnChange = (e) => {
		e.preventDefault();

		let value = e.target.value;

		/* Start With */
		if (["/", " "].indexOf(value[0]) === -1) return;
		/* Allowed characters */
		if (value.length > 1 && !/[a-zA-Z0-9_\-/ ]/.test(value[value.length - 1]))
			return;
		/* No Spaces */
		value = value.replaceAll(" ", "_");
		/* Lower Case */
		value = value.toLowerCase();

		input.onChange(value);
	};

	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={input.name}>
				{field.label || field.name}
			</label>
			<div className={styles.description}>{field.description}</div>
			<Input
				type="text"
				{...input}
				className={styles.input}
				placeholder={"Route"}
				onChange={handleOnChange}
			/>
			<div className={`${styles.error} field-error`}>{meta.error}</div>
		</div>
	);
};

export default Route;
