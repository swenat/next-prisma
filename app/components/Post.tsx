"use client";

import React from "react";

interface PostProps {
	id: number;
	title: string;
	content: string;
}

const Post: React.FC<PostProps> = ({ id, title, content }) => {
	return (
		<div key={id}>
			<h2 className="text-xl">{title}</h2>
			<p className="text-neutral-700">{content}</p>
		</div>
	);
};

export default Post;
