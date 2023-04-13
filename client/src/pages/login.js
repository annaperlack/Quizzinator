import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            email: '',
            password: '',
        });
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <div className="card-body">
                            <form autoComplete="off" onSubmit={handleFormSubmit}>
                                <h2>Login</h2>
                                <TextField
                                    label="Email"
                                    name='email'
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
                                    name='password'
                                    value={formState.password}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="password"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                                <Button variant="outlined" color="secondary" type="submit">Login</Button>
                            </form>
                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                        {<small>Need an account? <Link to="/signup">Register here</Link></small>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
