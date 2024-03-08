import { useEffect, useRef, useState } from "react";
import { Box, TextField, ButtonGroup, Button, styled } from "@mui/material";
import styles from "./email.module.scss";

enum EFields {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

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
}));

function Home() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {};
  const handleReset = () => {};

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
          size="medium"
          onChange={(e) => handleChange(EFields.MESSAGE, e.target.value)}
        />
        <ButtonGroup>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Home;
