"use client";

import React, { useState } from "react";

interface TodoProps {
	id: number;
	task: string;
	completed: boolean;
}

const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos") || "[]");
};
const saveTodosToLocalStorage = (
	todos: { id: number; task: string; completed: boolean }[]
) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

const Todo: React.FC<TodoProps> = ({ id, task, completed }) => {
	const [isCompleted, setIsCompleted] = useState(completed);

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
			<span className={isCompleted ? "line-through" : ""}>{task}</span>
		</div>
	);
};

export default Todo;
