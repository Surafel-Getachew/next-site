import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPost';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UserPosts from './Components/UserPosts';
import getUsers from '@/lib/getUsers';

type UserPageProps = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: UserPageProps): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: UserPageProps) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const user: User = await userData;

  if (!user.name) {
    return notFound();
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading....</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </div>
  );
};

export async function generateStaticParams() {
  const userData: Promise<User[]> = getUsers();
  const users = await userData;

  return users.map((user) => ({ userId: user.id.toString() }));
}

export default UserPage;
