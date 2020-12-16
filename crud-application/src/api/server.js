const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


let corsOptions = {
  origin: "http://localhost:3001"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) =>{
  res.json({message: 'Запрос получен'})
});

const PORT = process.env || 3001;
app.listen(PORT, ()=>{
  console.log(`Сервер запущен на ${PORT} порту`)
})