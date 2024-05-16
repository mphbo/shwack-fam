import { useState } from "react";
import { Box, TextField, ButtonGroup, Button, styled } from "@mui/material";
import styles from "./events.module.scss";
import {
  EFields,
  IErrors,
  IFields,
  defaultErrors,
  defaultFields,
  formEndpoint,
} from "./types";
const options = {
  shouldForwardProp: (prop: any) => prop !== "fontColor",
};
const StyledTextField = styled(
  TextField,
  options
)(() => ({
  input: {
    color: "white",
  },
  textArea: {
    color: "white",
  },
}));

function Home() {
  const [fields, setFields] = useState<IFields>(defaultFields);
  const [errors, setErrors] = useState<IErrors>(defaultErrors);
  useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setErrors(defaultErrors);
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFields(defaultFields);
  };

  const handleSubmit = (fields: IFields) => {
    const currentErrors = (
      Object.keys(fields) as (keyof typeof fields)[]
    ).filter((field) => {
      if (
        !fields[field] ||
        (field === "email" && !fields[field].includes("@"))
      ) {
        setErrors((prev) => ({
          ...prev,
          [field]: { ...prev[field], isError: true },
        }));
        return true;
      }
      return false;
    });

    if (currentErrors.length > 0) {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    };
    fetch(formEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        handleReset();
      })
      .catch((e) => {
        handleReset();
        console.log(e);
      });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>EVENTS:</h1>
    </div>
  );
}

export default Home;
