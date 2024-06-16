"use client";

import React, { useEffect, useState } from "react";

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

	useEffect(() => {
		const savedTodos = getTodosFromLocalStorage();
		const todo = savedTodos.find((t: { id: number }) => t.id === id);
		if (todo) {
			setIsCompleted(todo.completed);
		}
	}, [id]);

	const handleToggle = () => {
		const updatedStatus = !isCompleted;
		setIsCompleted(updatedStatus);
		const savedTodos = getTodosFromLocalStorage();
		const updatedTodos = savedTodos.map(
			(t: { id: number; completed: boolean }) =>
				t.id === id ? { ...t, completed: updatedStatus } : t
		);
		if (!savedTodos.find((t: { id: number }) => t.id === id)) {
			updatedTodos.push({ id, task, completed: updatedStatus });
		}
		saveTodosToLocalStorage(updatedTodos);
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
