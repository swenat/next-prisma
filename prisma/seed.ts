import { db } from "./db";

async function main() {
	await db.todo.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			task: "Complete tutorial",
			completed: false,
		},
	});
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
