const getTodos = async () => {
  const res = await fetch('http://localhost:8000/rockets', {
    cache: 'no-cache', // revalidates the catch on every request and it's have performance advantage over no-store as it only revalidates and if nothing changes there is no content to download but can't be used in cookie and that changes based on headers also it make the pages ssr as the page has to be rebuild on every requests
    // next: { revalidate: 20 }, // revalidate the cache every 20 sec // this will not change it to ssr it stays ssg allows you to use isr
    // cache: 'no-store', //To fetch fresh data on every fetch request // this will make the component ssr
  });
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export default getTodos;

// The difference b/n no-cached and no-store
// In Next.js 13, the difference between “no-cache” and “no-store” is that “no-cache” doesn’t mean there is never caching, but rather that the user agent
// has to always ask the server if it’s OK to use what it cached. By contrast, “no-store” says to not even keep a copy, which means there’s nothing to ask about.
// If you know the answer to “Can I reuse this?”, then you can use “no-store”. If you want to prevent the reuse of responses without revalidation, then you can use “no-cache”.

// how does asking the server if its Ok to use what is cached improve performance. can't it simply make the request and send what is updated
// Asking the server if it’s OK to use what is cached can improve performance because it allows the server to determine whether the cached content is still valid or not.
// If the content is still valid, then the server can simply return a 304 Not Modified response, which tells the client that it can use its cached version of the content. This saves time and bandwidth because the client doesn’t have to download the content again
// If you simply make the request and send what is updated, then you may end up sending more data than necessary. This can slow down your application and increase your bandwidth usage
// I hope this helps! Let me know if you have any other questions.
