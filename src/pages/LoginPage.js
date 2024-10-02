import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="login-page">
            <h2>Login to Van Lang Tour</h2>
            <form onSubmit={handleSubmit}>
                <label>Phone Number / Email</label>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Phone Number / Email" 
                    onChange={handleChange} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
