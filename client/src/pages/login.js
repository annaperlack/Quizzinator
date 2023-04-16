import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: "",
            password: "",
        });
    };

    return (
        <Grid>


            <Grid>
                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    <h2>Login</h2>
                    <TextField
                        label="Email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="email"
                        fullWidth
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="password"
                        fullWidth
                        sx={{ mb: 3 }}
                    />
                    <Button variant="outlined" color="secondary" type="submit">
                        Login
                    </Button>
                </form>
                {error && (
                    <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
                )}
                {
                    <Typography align="center">
                        Need an account? <Link to="/signup">Register here</Link>
                    </Typography>
                }
            </Grid>
        </Grid>
    );
};

export default Login;
