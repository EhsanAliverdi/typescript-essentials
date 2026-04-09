/*
In this section we will learn logging and debugging patterns.

We will learn:
- structured logging
- debugging strategies
- improving observability

What we are doing:
We are making applications easier to monitor and debug.
*/

// Simple logging
console.log("User created");

// Structured logging
function logInfo(message: string, meta?: object) {
  console.log(JSON.stringify({
    level: "info",
    message,
    ...meta,
    timestamp: new Date().toISOString()
  }));
}

logInfo("User created", { userId: 1 });

// Error logging
function logError(error: Error) {
  console.error({
    message: error.message,
    stack: error.stack
  });
}

/*
Real-world tools:
- Winston / Pino (Node.js)
- Application Insights / OpenTelemetry (backend systems)
*/