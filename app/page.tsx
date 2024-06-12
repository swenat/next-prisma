import { db } from "@/prisma/db";

export default async function Home() {
	const posts = await db.post.findMany({});

	return (
		<main className="flex flex-col items-center justify-between p-4">
			<h1 className="text-2xl font-bold text-grey-700 mb-8">
				Welcome to my Blog
			</h1>

			{posts.map((post) => (
				<div key={post.id}>
					<h2 className="text-xl">{post.title}</h2>
					<p className="text-neutral-700">{post.content}</p>
				</div>
			))}
		</main>
	);
}
