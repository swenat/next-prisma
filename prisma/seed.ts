import { db } from "./db";

async function main() {
	//Todo
	await db.todo.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			task: "Complete tutorial",
			completed: false,
		},
	});

	await db.todo.upsert({
		where: { id: 2 },
		update: {},
		create: {
			id: 2,
			task: "Read a book",
			completed: false,
		},
	});

	await db.todo.upsert({
		where: { id: 3 },
		update: {},
		create: {
			id: 3,
			task: "Go for a run",
			completed: true,
		},
	});
	//Post
	await db.post.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			title: "Sunday 21st met Daniel",
			content:
				"We ate at this great cafe called Huntington I really hope we go again cause the coffee was out of this world.",
		},
	});
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});
