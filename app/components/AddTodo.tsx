"use client";

import React, { useState } from "react";

const AddTodo: React.FC = () => {
	const [task, setTask] = useState("");

	const handleAddTodo = async () => {
		if (task.trim()) {
			await fetch("/api/todos/${id}", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ task }),
			});
			setTask("");
			window.location.reload();
		}
	};

	return (
		<div className="mb-8">
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Add a new todo"
				className="border p-2 mr-2"
			/>
			<button
				onClick={handleAddTodo}
				className="bg-blue-500 text-white px-4 py-2 rounded"
			>
				Add
			</button>
		</div>
	);
};

export default AddTodo;
