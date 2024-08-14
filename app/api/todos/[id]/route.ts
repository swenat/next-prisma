import { db } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { task } = await request.json();

	try {
		const newTodo = await db.todo.create({
			data: {
				task,
				completed: false,
			},
		});
		return NextResponse.json(newTodo);
	} catch (error) {
		return NextResponse.error();
	}
}

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

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params;

	try {
		await db.todo.delete({
			where: { id: Number(id) },
		});
		return NextResponse.json({ message: "Todo deleted successfully" });
	} catch (error) {
		return NextResponse.error();
	}
}
