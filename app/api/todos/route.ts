import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest, res: NextResponse) {
  const todos: Todo[] = [
    // { title: 'Next JS', description: 'SSG and SSR', done: false },
    {
      title: 'Typescript casting',
      description: 'converting types as need ',
      done: true,
    },
    // {
    //   title: 'UnSupervise learning',
    //   description: 'full chapter of unsupervised learning',
    //   done: false,
    // },
  ];
  return NextResponse.json(todos);
}
