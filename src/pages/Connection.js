import React from 'react';

export default function Connection() {
    return (
        <div className="connection-container">
            <h2>Sign Up or Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
