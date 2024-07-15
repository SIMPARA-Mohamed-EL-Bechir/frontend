import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}
