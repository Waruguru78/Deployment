import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(task.name);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);
    const [updatedPriority, setUpdatedPriority] = useState(task.priority);
    const [updatedDueDate, setUpdatedDueDate] = useState(task.dueDate);

    const handleEdit = () => {
        const updatedTask = {
            ...task,
            name: updatedName,
            description: updatedDescription,
            priority: updatedPriority,
            dueDate: updatedDueDate,
        };
        editTask(updatedTask);
        setIsEditing(false);
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <div className="edit-form">
                    <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                    <select value={updatedPriority} onChange={(e) => setUpdatedPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <input
                        type="date"
                        value={updatedDueDate}
                        onChange={(e) => setUpdatedDueDate(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <>
                    <span
                        onClick={() => toggleTaskCompletion(task.id)}
                        style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.name} (Priority: {task.priority}, Due: {task.dueDate})
                    </span>
                    <span>{task.description}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TaskItem;
