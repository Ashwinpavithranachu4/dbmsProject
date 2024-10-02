import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
    const [form, setForm] = useState({
        lastName: '',
        firstName: '',
        gender: '',
        dob: ''
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
        <div className="register-page">
            <h2>Ready to join Van Lang Tour?</h2>
            <form onSubmit={handleSubmit}>
                <label>Preferred Language:</label>
                <select name="language" onChange={handleChange}>
                    <option value="English">English</option>
                    <option value="Vietnamese">Vietnamese</option>
                </select>
                <label>Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last name (ex: NGUYEN)" 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First name" 
                    onChange={handleChange} 
                />
                <label>Gender</label>
                <select name="gender" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Date of Birth</label>
                <input 
                    type="date" 
                    name="dob" 
                    onChange={handleChange} 
                />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default RegisterPage;
