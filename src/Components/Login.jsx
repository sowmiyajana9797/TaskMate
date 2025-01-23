import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (
            storedUser &&
            storedUser.username === credentials.username &&
            storedUser.password === credentials.password
        ) {
            navigate('/tasklist');
        } else {
            alert('Invalid username or password');   
        }
    };

    return ( 
        <div
            className="container-fluid d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-background-with-blue-metallic-shapes_23-2148239789.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="card p-4" style={{ width: '400px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
                <h3 className="text-center">Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            required
                            value={credentials.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    Don't have an account? <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
