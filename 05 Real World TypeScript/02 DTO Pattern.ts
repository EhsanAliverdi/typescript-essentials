/*
In this section we will learn the DTO (Data Transfer Object) pattern.

We will learn:
- what a DTO is and why it exists
- separating internal models from external API data
- mapping between DTOs and domain models
- improving maintainability and decoupling
*/

//  DOMAIN MODEL (internal) 
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
}

//  DTO (what the API sends/receives) 
interface UserDto {
  id: number;
  full_name: string;   // snake_case from API
  email: string;
  created_at: string;  // string, not Date
}

//  MAPPER FUNCTION 
function toUser(dto: UserDto): User {
  const [firstName, ...rest] = dto.full_name.split(" ");
  return {
    id: dto.id,
    firstName: firstName ?? "",
    lastName: rest.join(" "),
    email: dto.email,
    createdAt: new Date(dto.created_at),
  };
}

//  USAGE 
const dto: UserDto = { id: 1, full_name: "Ehsan Ali", email: "e@test.com", created_at: "2026-01-01" };
const user = toUser(dto);
console.log(user.firstName); // "Ehsan"
