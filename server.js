const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Jeg er server' + port);
  }, "2000");
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})