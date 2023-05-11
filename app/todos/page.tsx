import getTodos from '@/lib/getTodos';
import Link from 'next/link';
const Todos = async () => {
  const todosData: Promise<Todo[]> = getTodos();
  const todos = await todosData;
  const content = (
    <section>
      <h2>
        <Link href='/'>Back to Home Page</Link>
      </h2>
      <br />
      {todos.map((todo, i) => (
        <>
          <p key={i}>
            {/* <Link href={`/users/${user.id}`}>{todo.title}</Link> */}
            {todo.title}
          </p>
          <br />
        </>
      ))}
    </section>
  );
  return content;
};

export default Todos;
