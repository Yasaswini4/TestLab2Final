const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const cors = require('cors');
const descriptionRoute = require('./routes/v1/description.routes');
const  addNumbersRoute  = require('./routes/v1/addition.routes');
// middlewares
app.use(cors())
app.use(express.json())


// routes
app.use('/api/v1/description', descriptionRoute);
app.use('/api/v1/add', addNumbersRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})