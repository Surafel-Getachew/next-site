'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <h1>
      Home Page
      <Link href={'/users'}>Users Page</Link>
    </h1>
  );
}
