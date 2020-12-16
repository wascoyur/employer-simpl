const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let corsOptions = {
  origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.Router().get("/",(req, res) => {
  res.json({ message: 'Сервер старт'})
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log(`Сервер запущен на порту: ${PORT}`)
})

