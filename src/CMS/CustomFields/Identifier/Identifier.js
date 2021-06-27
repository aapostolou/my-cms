import React from "react";
import { Input } from "tinacms";

import styles from "./Identifier.module.scss";

const Identifier = ({ input, meta, field }) => {
  const handleOnChange = (e) => {
    e.preventDefault();

    let value = e.target.value;

    /* Start With */
    if (!/[a-zA-Z_$]/.test(value[0])) return;
    /* Allowed characters */
    if (!/[a-zA-Z0-9_$\- ]/.test(value[value.length - 1])) return;
    /* No Spaces */
    value = value.replaceAll(" ", "-");
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
        placeholder={"Identifier"}
        onChange={handleOnChange}
      />
      <div className={`${styles.error} field-error`}>{meta.error}</div>
    </div>
  );
};

export default Identifier;
