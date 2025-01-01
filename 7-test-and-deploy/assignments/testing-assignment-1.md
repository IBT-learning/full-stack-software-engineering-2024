# Testing Assignment #1: Writing Automated Server Tests

In this assignment you'll use `vitest` and `supertest` to write automated tests for an old assignment.

### Testing My First Server Assignment

We're revisiting [My First Server Assignment](../../4-server/assignments/server-assignment-2.md), in which you set up four simple endpoints that return strings.

You can either copy that assignment into a new folder, or just add the tests to your old assignment. Either way is fine. Install `vitest` and `supertest` into the npm project, and create an `app.test.js` file.

In that file, write tests for each of these endpoints:

1. `/about` — sends a static string, use .toBe() to compare
1. `/greet/:userName` — sends a template string that greets each person by name. You will need at least two requests and two assertions to check that it works with different inputs.
1. `/favorite` — this one uses query strings. Again, you'll need to make at least two requests and two assertions to make sure it responds to different query strings. You should also check what happens if the query string is missing.
