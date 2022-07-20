import * as React from "react";
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
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { LogInAction } from "./../../../store/acitons/auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Copyright from "../copyright";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(LogInAction(loginInfo));
    setLoginInfo({ ...loginInfo, email: "", password: "" });
  };
  return (
    <Container
      component={Paper}
      sx={{ backgroundColor: "#f5f7fa", width: "500px" }}
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
          Sign in
        </Typography>
        <ValidatorForm
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                required
                onChange={handleChange}
                fullWidth
                label="Email Address"
                name="email"
                value={loginInfo.email}
                autoComplete="email"
                autoFocus
                validators={["required", "isEmail"]}
                errorMessages={[
                  "This field is required!",
                  "Input the email correctly",
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["This field is required!"]}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={loginInfo.password}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </Box>
      <Copyright sx={{ mt: 3, paddingBottom: 3 }} />
    </Container>
  );
};

export default LoginPage;
