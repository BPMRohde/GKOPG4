const express = require('express')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  let count = 0;
  for (let i = 0; i <= 3000000000; i++) {
    count += i;
  }
  
  res.send('Jeg er server' + port);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})