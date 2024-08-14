import { db } from "@/prisma/db";
import AddTodo from "./components/AddTodo";
import Post from "./components/Post";
import Todo from "./components/Todo";

export default async function Home() {
	const posts = await db.post.findMany({});
	const todos = await db.todo.findMany({});

	return (
		<main className="flex flex-col items-center justify-between p-4">
			<h1 className="text-2xl font-bold text-grey-700 mb-8">
				Your Diary Posts
			</h1>

			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					content={post.content}
				/>
			))}
			<h3 className="text-2xl font-bold text-grey-700 mb-8 mt-8">Your todos</h3>
			<AddTodo />
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					task={todo.task}
					completed={todo.completed}
				/>
			))}
		</main>
	);
}
