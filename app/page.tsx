"use client";
import { db } from "@/prisma/db";

export default async function Home() {
	const posts = await db.post.findMany({});
	const todos = await db.todo.findMany({});

	return (
		<main className="flex flex-col items-center justify-between p-4">
			<h1 className="text-2xl font-bold text-grey-700 mb-8">Your Posts</h1>

			{posts.map((post) => (
				<div key={post.id}>
					<h2 className="text-xl">{post.title}</h2>
					<p className="text-neutral-700">{post.content}</p>
				</div>
			))}
			<h1 className="text-2xl font-bold text-grey-700 mb-8">Your todos</h1>

			{todos.map((todo) => (
				<div key={todo.id} className="mb-4">
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => {}}
						className="mr-2"
					/>
					<span className={todo.completed ? "line-through" : ""}>
						{todo.task}
					</span>
				</div>
			))}
		</main>
	);
}
