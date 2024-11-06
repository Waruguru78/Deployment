import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('medium');
    const [taskDueDate, setTaskDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription || !taskDueDate) {
            alert('All fields are required!');
            return;
        }
        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            dueDate: taskDueDate,
        };
        addTask(newTask);
        setTaskName('');
        setTaskDescription('');
        setTaskPriority('medium');
        setTaskDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
            />
            <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input
                type="date"
                value={taskDueDate}
                onChange={(e) => setTaskDueDate(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
