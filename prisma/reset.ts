import { db } from "./db";

async function main() {
	// NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
	if (process.env.NODE_ENV !== "test") return;

	await db.post.deleteMany({}); //lägg in för alla delarna, ta bort från alla tabeller så lägg till fler för varje här //
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
