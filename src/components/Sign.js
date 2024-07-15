import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}
