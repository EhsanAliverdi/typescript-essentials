/*
In this section we will learn decorators (intro).

We will learn:
- modifying class behavior
*/

function Logger(target: Function) {
  console.log("Class created:", target.name);
}

@Logger
class User {}


let user = new User(); // This will trigger the Logger decorator and log "Class created: User"