/*
Scenario: DTO Mapping

Real-world problem:
Data from an API or database often has a different shape than what the
frontend or application layer needs. Mixing these layers causes leaky
abstractions and breaks when APIs change.

Goal: Use Data Transfer Objects (DTOs) to model external data and
map them to clean domain models  keeping each layer independent.
*/

//  DATABASE / API RESPONSE SHAPE (raw external data) 
interface UserApiDto {
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  date_of_birth: string;   // "1995-06-15"
  is_active: number;       // 0 or 1
  created_at: string;      // ISO date string
  role_id: number;
}

//  DOMAIN MODEL (what the app actually uses) 
type UserRole = "admin" | "editor" | "viewer";

interface User {
  id: number;
  fullName: string;
  email: string;
  age: number;
  isActive: boolean;
  role: UserRole;
  memberSince: Date;
}

//  MAPPER FUNCTION 
function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function roleFromId(roleId: number): UserRole {
  const roles: Record<number, UserRole> = { 1: "admin", 2: "editor", 3: "viewer" };
  return roles[roleId] ?? "viewer";
}

function mapUserDtoToDomain(dto: UserApiDto): User {
  return {
    id: dto.user_id,
    fullName: `${dto.first_name} ${dto.last_name}`.trim(),
    email: dto.email_address,
    age: calculateAge(dto.date_of_birth),
    isActive: dto.is_active === 1,
    role: roleFromId(dto.role_id),
    memberSince: new Date(dto.created_at),
  };
}

//  REVERSE MAPPER: Domain  API 
function mapUserToDto(user: User, dto: UserApiDto): UserApiDto {
  return {
    ...dto,
    first_name: user.fullName.split(" ")[0] ?? "",
    last_name: user.fullName.split(" ").slice(1).join(" "),
    email_address: user.email,
    is_active: user.isActive ? 1 : 0,
  };
}

//  LIST MAPPER 
function mapUserList(dtos: UserApiDto[]): User[] {
  return dtos.map(mapUserDtoToDomain);
}

//  USAGE 
const rawApiResponse: UserApiDto = {
  user_id: 42,
  first_name: "Alice",
  last_name: "Johnson",
  email_address: "alice@example.com",
  date_of_birth: "1995-06-15",
  is_active: 1,
  created_at: "2022-01-10T08:00:00Z",
  role_id: 2,
};

const user = mapUserDtoToDomain(rawApiResponse);
console.log("Domain user:", user.fullName, "| Role:", user.role, "| Age:", user.age);
console.log("Active:", user.isActive, "| Member since:", user.memberSince.getFullYear());

// The rest of the app works with `User`, never with `UserApiDto`
//  if the API changes field names, only the mapper needs updating
export { mapUserDtoToDomain, mapUserList };
