import { FunctionComponent } from "react";
import { Button, Typography } from "elements";
import { TextInputField } from "components";
import { useFormikContext } from "formik";
import { Box, Stack, useTheme } from "@mui/material";

const InitiateReset: FunctionComponent = () => {
  const theme = useTheme();
  const { isValid } = useFormikContext();

  return (
    <Box
      sx={ {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mb: 8,
      } }
    >
      <Typography mt={ 4 } maxWidth={ 800 } variant="h1">
        Enter your email to reset your password
      </Typography>

      <Stack
        spacing={ 1.5 }
        my={ 7.5 }
        mx="auto"
        maxWidth={ theme.inputField.maxWidth }
        width="100%"
      >
        <TextInputField
          aria-label="Enter email to reset password"
          name="email"
          placeholder="Your email"
          type="text"
        />
        <Button disabled={ !isValid } type="submit">
          Reset password
        </Button>
      </Stack>
    </Box>
  );
};

export default InitiateReset;
