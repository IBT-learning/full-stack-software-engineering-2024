// This exists so that app.js no longer automatically runs
// meaning we can export it, and the test runner can use it

import app from "./app.js"
const PORT = 4000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
