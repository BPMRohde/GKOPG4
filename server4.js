const express = require('express')
const app = express()
const port = 8003

app.get('/', (req, res) => {
  for (let i = 0; i <= 5000000000; i++) {
    count += i;
  }
  
  res.send('Jeg er server' + port);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})