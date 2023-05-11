const getUser = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) undefined;
  return res.json();
};

export default getUser;
