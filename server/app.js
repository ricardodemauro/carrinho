var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const connStr = "Server=dmdbase.database.windows.net,1433;Database=dmdb;User Id=daniel;Password=!123deoliveira4;encrypt=true";
const sql = require("mssql");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('../client/build'));

var router = express.Router();              // get an instance of the express Router

//fazendo a conexão global
sql.connect(connStr)
   .then(conn => GLOBAL.conn = conn)
   .catch(err => console.log(err));

function execSQLQuery(sqlQry, res){
    GLOBAL.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/locations', function(req, res) {
    execSQLQuery('SELECT Convert(Numeric(10,8), lat) as lat, Convert(Numeric(10,8), lon) as lng, info, date_time FROM [DATA]', res);
})

app.use('/api', router);

var port = process.env.PORT || 3001;        // set our port
app.listen(port, function () {
  console.log('Magic happens on port ' + port);
});