import React, { useState } from 'react';

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !name || !password || !confirmPassword) {
            setError('Error: All the fields are mandatory.');
        }

        else if (password !== confirmPassword) {
            setError('Error: Passwords do not match.');
        }

        else {
            setSuccess('Successfully Signed Up');
            setEmail('');
            setName('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        }
    };

    return (
        <div className='signupForm'>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input placeholder='Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                {error && <p style={{ color: 'red' }}> {error} </p>}
                {success && <p style={{ color: 'green' }}> {success} </p>}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;