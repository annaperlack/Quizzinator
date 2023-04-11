import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
            console.log(data)
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={handleFormSubmit}>
                            <h2>Signup</h2>
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
                            <Button variant="outlined" color="secondary" type="submit">Signup</Button>
                        </form>


                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                        {<small>Already have an account? <Link to="/">Login here</Link></small>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
