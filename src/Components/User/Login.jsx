import React, { useState } from 'react';
import { Container, TextField, Button, Avatar, Typography, Stack, Paper, FormControlLabel, Checkbox } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({ theme = "light" }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    console.log(formValues);
  };

  const darkThemeStyles = {
    backgroundColor: "#2B2C40",
    color: "#DBDBEB",
    borderColor: "#DBDBEB",
  };

  const lightThemeStyles = {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  };

  const styles = theme === "dark" ? darkThemeStyles : lightThemeStyles;

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50, backgroundColor: styles.backgroundColor }}>
        <Avatar style={{ margin: "10px auto", backgroundColor: "#f50057" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center" style={{ color: styles.color }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
          <Stack spacing={2}>
            {!isLogin && (
              <>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="name"
                  autoFocus
                  InputProps={{
                    style: { backgroundColor: styles.backgroundColor, color: styles.color, borderColor: styles.borderColor },
                  }}
                  InputLabelProps={{
                    style: { color: styles.color },
                  }}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  InputProps={{
                    style: { backgroundColor: styles.backgroundColor, color: styles.color, borderColor: styles.borderColor },
                  }}
                  InputLabelProps={{
                    style: { color: styles.color },
                  }}
                />
              </>
            )}
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Username/Email"
              name="email"
              autoComplete="email"
              InputProps={{
                style: { backgroundColor: styles.backgroundColor, color: styles.color, borderColor: styles.borderColor },
              }}
              InputLabelProps={{
                style: { color: styles.color },
              }}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: { backgroundColor: styles.backgroundColor, color: styles.color, borderColor: styles.borderColor },
              }}
              InputLabelProps={{
                style: { color: styles.color },
              }}
            />
            {!isLogin && (
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                InputProps={{
                  style: { backgroundColor: styles.backgroundColor, color: styles.color, borderColor: styles.borderColor },
                }}
                InputLabelProps={{
                  style: { color: styles.color },
                }}
              />
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              style={{ color: styles.color }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<GoogleIcon />}
              style={{ backgroundColor: '#db4a39', color: 'white' }}
            >
              {isLogin ? 'Login with Google' : 'Sign Up with Google'}
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<MicrosoftIcon />}
              style={{ backgroundColor: '#00a1f1', color: 'white' }}
            >
              {isLogin ? 'Login with Microsoft' : 'Sign Up with Microsoft'}
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={handleToggle}
              style={{ color: styles.color }}
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
