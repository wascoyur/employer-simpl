const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_simple'
});

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });
//
// con.query('SELECT * FROM `main-taible`',(err, rows) =>{
//   if(err) throw err;
//   console.log('Data received from Db:', rows)
// })
// con.end((err) => {
//   console.log('connection close')
// });

module.exports = pool;