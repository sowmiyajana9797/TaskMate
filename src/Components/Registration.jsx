import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/login');
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
                <h3 className="text-center">Registration</h3>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;
