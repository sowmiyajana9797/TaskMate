import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const handleTitleChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setTitle(value);
        }
    };

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setDescription(value);
        }
    };

    const addTask = () => {
        if (!title) return alert('Please enter a task title');
        const newTask = { title, description, status: 'Pending' };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
    };

    const editTask = (index) => {
        const taskToEdit = tasks[index];
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setIsEditing(true);
        setCurrentTaskIndex(index);
    };

    const updateTask = () => {
        if (!title) return alert('Please enter a task title');
        const updatedTasks = [...tasks];
        updatedTasks[currentTaskIndex] = {
            ...updatedTasks[currentTaskIndex],
            title,
            description,
        };
        setTasks(updatedTasks);
        setTitle('');
        setDescription('');
        setIsEditing(false);
        setCurrentTaskIndex(null);
    };

    const toggleStatus = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status =
            updatedTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
        setTasks(updatedTasks);
    };

    const completedTasks = tasks.filter((task) => task.status === 'Completed');

    return (
        <div
            className="container-fluid d-flex flex-column align-items-center py-5"
            style={{
                backgroundImage:
                    'url("https://media.istockphoto.com/id/1410469317/vector/beautiful-and-delicate-corrugated-background-illustration.jpg?s=612x612&w=0&k=20&c=CiQVpyb45qd29k_ynSx_UQscnDfrPhpaxOmjJBX-NWs=")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <div
                className="container p-4"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    width: '90%',
                    maxWidth: '1200px',
                }}
            >
                <h2 className="text-center mb-4">HTM Application</h2>
                <div className="row mb-4">
                    <div className="col-md-5">
                        <input
                            type="text"
                            placeholder="Task Title"
                            className="form-control"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="col-md-5">
                        <input
                            type="text"
                            placeholder="Description"
                            className="form-control"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <div className="col-md-2">
                        {isEditing ? (
                            <button className="btn btn-success w-100" onClick={updateTask}>
                                Update Task
                            </button>
                        ) : (
                            <button className="btn btn-primary w-100" onClick={addTask}>
                                Create Task
                            </button>
                        )}
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>
                                    <button
                                        className={`btn btn-sm ${
                                            task.status === 'Pending'
                                                ? 'btn-warning'
                                                : 'btn-success'
                                        }`}
                                        onClick={() => toggleStatus(index)}
                                    >
                                        {task.status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => editTask(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            setTasks(tasks.filter((_, i) => i !== index))
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {completedTasks.length > 0 && (
                    <>
                        <h3 className="text-center mt-4">Completed Tasks</h3>
                        <table className="table table-bordered mt-3">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {completedTasks.map((task, index) => (
                                    <tr key={index}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskList;
