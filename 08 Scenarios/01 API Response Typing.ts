/*
Scenario: API Response Typing

Real-world problem:
You are fetching data from a REST API. Without proper typing, you have
no idea what the response contains and make mistakes accessing properties.

Goal: Create a generic, reusable API response wrapper and a typed fetch
helper that handles success, error, and loading states safely.
*/

//  GENERIC API RESPONSE WRAPPER 
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
  ok: boolean;
}

//  DOMAIN TYPES 
interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

//  TYPED FETCH HELPER 
async function apiFetch<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: `HTTP ${response.status}`, status: response.status, ok: false };
    }
    const data: T = await response.json() as T;
    return { data, error: null, status: response.status, ok: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { data: null, error: message, status: 0, ok: false };
  }
}

//  USAGE 
async function main(): Promise<void> {
  // Fetch a single user  response is fully typed
  const userResponse = await apiFetch<User>("https://jsonplaceholder.typicode.com/users/1");

  if (!userResponse.ok || !userResponse.data) {
    console.error("Failed to fetch user:", userResponse.error);
    return;
  }

  const user = userResponse.data;
  console.log(`User: ${user.name} (${user.email})`);

  // Fetch list of posts
  const postsResponse = await apiFetch<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=1");

  if (postsResponse.ok && postsResponse.data) {
    console.log(`Posts count: ${postsResponse.data.length}`);
    postsResponse.data.slice(0, 3).forEach((post) => {
      console.log(` - ${post.title}`);
    });
  }
}

main();
