/*
In this section we will learn how to work with APIs in TypeScript.

We will learn:
- typing API responses
- using fetch with TypeScript generics
- handling async data safely
- avoiding the "any" trap with API data
*/

//  TYPED API RESPONSE 
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

//  GENERIC FETCH HELPER 
async function get<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const data = (await res.json()) as T;
  return { data, status: res.status, message: "OK" };
}

//  USAGE 
async function loadUser(id: number): Promise<void> {
  const response = await get<User>(`/api/users/${id}`);
  console.log(response.data.name); // fully typed  no any
}
