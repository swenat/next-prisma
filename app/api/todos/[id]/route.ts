import { db } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function PATCH(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	const { completed } = await request.json();

	try {
		const updatedTodo = await db.todo.update({
			where: { id: Number(id) },
			data: { completed },
		});
		return NextResponse.json(updatedTodo);
	} catch (error) {
		return NextResponse.error();
	}
}
