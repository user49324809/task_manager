import React, { useState } from 'react';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() === '') return;
    editTask(task.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            onKeyDown={(e) => {
if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') setIsEditing(false);
            }}
          />
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={() => setIsEditing(false)}>Отмена</button>
        </>
      ) : (
        <>
          <span onDoubleClick={() => setIsEditing(true)}>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;