# NextJS Prisma E2E Project

This is a fullstack web application built using Next.js, Prisma, and SQLite. The application allows users to manage a simple to-do list and create diary posts. The primary focus of this project is to demonstrate end-to-end (E2E) testing with Cypress, ensuring the application's functionality through automated tests.

# Features

To-Do List Management: Add, edit, mark as complete, and delete to-do items.
Diary Posts: View and manage diary posts.
Automated E2E Testing: Cypress is used to automate the testing of user flows, including adding, editing, and deleting tasks and viewing posts.

# Project Structure

**Frontend:** Built with Next.js and React.
**Backend:** Uses Prisma ORM with SQLite as the database.
**E2E Testing:** Cypress is set up for comprehensive testing.

## Installation

git clone https://github.com/swenat/next-prisma.git
cd next-prisma
npm install

## Database setup

npm run push
npm run seed

## Run tests

npm run test
