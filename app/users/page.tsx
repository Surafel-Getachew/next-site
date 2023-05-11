import getUsers from '@/lib/getUsers';
import Link from 'next/link';
const page = async () => {
  const userData: Promise<User[]> = getUsers();
  const users = await userData;
  console.log('Hello');

  const content = (
    <section>
      <h2>
        <Link href='/'>Back to Home Page</Link>
      </h2>
      <br />
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
        </>
      ))}
    </section>
  );
  return content;
};

export default page;
