/*
In this section we will learn SOLID principles.

We will learn:
- 5 design principles for maintainable code

What we are doing:
We are writing cleaner and scalable code.
*/

/*
S — Single Responsibility
A class should have one responsibility
*/

class Report {
  generate() {}
}

class ReportPrinter {
  print(report: Report) {}
}

/*
O — Open/Closed
Open for extension, closed for modification
*/

/*
L — Liskov Substitution
Subtypes must be replaceable
*/

/*
I — Interface Segregation
Prefer small interfaces
*/

interface Readable {
  read(): void;
}

interface Writable {
  write(): void;
}

/*
D — Dependency Inversion
Depend on abstractions, not concrete classes
*/