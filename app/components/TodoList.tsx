"use client";

import React, { useState } from "react";

interface TodoProps {
	id: number;
	task: string;
	completed: boolean;
}

const TodoList: React.FC<TodoProps> = ({ id, task, completed }) => {
	const [isCompleted, setIsCompleted] = useState(completed);
	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState(task);

	const handleToggle = async () => {
		const updatedStatus = !isCompleted;
		setIsCompleted(updatedStatus);

		await fetch(`/api/todos/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ completed: updatedStatus }),
		});
	};
	const handleDelete = async () => {
		await fetch(`/api/todos/${id}`, {
			method: "DELETE",
		});

		window.location.reload();
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = async () => {
		if (editedTask.trim()) {
			await fetch(`/api/todos/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ task: editedTask }),
			});
			setIsEditing(false);
			window.location.reload();
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedTask(task);
	};

	return (
		<div
			key={id}
			className="bg-yellow-100 p-4 rounded-md shadow-md mb-4 w-full max-w-md"
		>
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={handleToggle}
				className="mr-2"
			/>

			{isEditing ? (
				<>
					<input
						type="text"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
						className="border p-2 mr-2 w-full"
					/>
					<button
						onClick={handleSave}
						className="px-2 py-1 bg-green-500 text-white rounded mr-2"
					>
						Save
					</button>
					<button
						onClick={handleCancel}
						className="px-2 py-1 bg-gray-500 text-white rounded"
					>
						Cancel
					</button>
				</>
			) : (
				<>
					<span className={isCompleted ? "line-through" : ""}>{task}</span>
					<button
						onClick={handleEdit}
						className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
					>
						Edit
					</button>
					<button
						onClick={handleDelete}
						className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
					>
						Delete
					</button>
				</>
			)}
		</div>
	);
};

export default TodoList;
