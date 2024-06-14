"use client";

import React, { useState } from "react";

interface TodoProps {
	id: number;
	task: string;
	completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ id, task, completed }) => {
	const [isCompleted, setIsCompleted] = useState(completed);

	const handleToggle = async () => {
		//Uppdatera todo status i databasen här om jag behöver
		setIsCompleted(!isCompleted);
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
