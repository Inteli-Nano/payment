import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  Paper,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SignUpAction } from "../../../store/acitons/auth";
import Copyright from "../copyright";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [signInfo, setSignInfo] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const onChange = (e) => {
    setSignInfo({ ...signInfo, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== signInfo.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("isLength", (value) => {
      if ((value.length !== 0 && value.length < 3) || value.length > 30) {
        return false;
      }
      return true;
    });
  }, [signInfo]);
  React.useEffect(() => {
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }, []);

  const handleSubmit = () => {
    dispatch(SignUpAction(signInfo));
    setSignInfo({
      ...signInfo,
      email: "",
      password: "",
      name: "",
      confirm: "",
    });
  };

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{ backgroundColor: "#f5f7fa" }}
    >
      <Box
        sx={{
          marginTop: 6,
          paddingTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sizes="large" sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign up
        </Typography>
        <ValidatorForm
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                validators={["required", "isLength"]}
                errorMessages={[
                  "This field is required!",
                  "The name is between 3 and 30 charactes",
                ]}
                autoComplete="given-name"
                name="name"
                value={signInfo.name}
                onChange={onChange}
                fullWidth
                label="*Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={["required", "isEmail"]}
                errorMessages={[
                  "This field is required!",
                  "Input the email correctly",
                ]}
                fullWidth
                label="Email Address"
                name="email"
                value={signInfo.email}
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={["required"]}
                errorMessages={["This field is required!"]}
                fullWidth
                name="password"
                value={signInfo.password}
                onChange={onChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                placeholder="Input the password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EnhancedEncryptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "This field is required!",
                  "Input the password correctly.",
                ]}
                fullWidth
                name="confirm"
                value={signInfo.confirm}
                onChange={onChange}
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="new-password"
                placeholder="Input the confirm password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </ValidatorForm>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 3, paddingBottom: 3 }} />
    </Container>
  );
};

export default SignupPage;
