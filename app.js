// The "business logic" our pipeline protects.
// Works in the browser (window.greet) and in Node tests (module.exports).
function greet(college) {
  const name = String(college || "").trim();
  if (!name) return "";
  return `Hello ${name}! 👋 This page was deployed by a CI/CD DevOps pipelines`;
}

if (typeof module !== "undefined") module.exports = { greet };
if (typeof window !== "undefined") window.greet = greet;
