import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import TaskList from './Components/TaskList';

function App() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tasklist" element={<TaskList />} />
            </Routes>
        </Router>
    );
}

export default App;