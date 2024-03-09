import { useEffect, useRef, useState } from "react";
import { Box, TextField, ButtonGroup, Button, styled } from "@mui/material";
import styles from "./email.module.scss";
import { AwesomeButton } from "react-awesome-button";

enum EFields {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

const defaultFields = {
  name: "",
  email: "",
  message: "",
};

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
  const [fields, setFields] = useState(defaultFields);

  const handleChange = (field: string, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {};
  const handleReset = () => {
    setFields(defaultFields);
  };

  return (
    <div className={styles.email}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <StyledTextField
          sx={{
            marginBottom: "20px",
            maxWidth: "400px",
          }}
          placeholder="Name"
          value={fields.name}
          variant="standard"
          fullWidth
          onChange={(e) => handleChange(EFields.NAME, e.target.value)}
        />
        <StyledTextField
          sx={{ marginBottom: "20px", maxWidth: "400px" }}
          placeholder="Email"
          value={fields.email}
          variant="standard"
          fullWidth
          onChange={(e) => handleChange(EFields.EMAIL, e.target.value)}
        />
        <StyledTextField
          sx={{ marginBottom: "40px", maxWidth: "400px" }}
          placeholder="Message"
          value={fields.message}
          variant="standard"
          fullWidth
          multiline
          size="medium"
          onChange={(e) => handleChange(EFields.MESSAGE, e.target.value)}
        />
        <ButtonGroup>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 0,
              background: "rgba(30, 170, 200, 1)",
            }}
          >
            Submit
          </Button>
          <Button
            onClick={handleReset}
            sx={{
              borderRadius: 0,
              borderColor: "rgba(30, 170, 200, 1)",
              color: "white",
              marginRight: "10vw",
            }}
          >
            Reset
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Home;
