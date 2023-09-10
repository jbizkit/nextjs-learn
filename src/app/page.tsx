import prisma from "../db";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  console.log(todos)

  return <h1>Hi</h1>
}