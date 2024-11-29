
'use strict';

const 
    express = require ('express'),
    app = express(),
    morgan = require ('morgan'),
    mongoose = require ('mongoose'),
    bodyParser = require ('body-parser'),
    path = require ('path'),
    cors = require('cors');
;

/* ====================================================== */
// Configura CORS
app.use(cors({
    origin: '*', // Permitir todas las solicitudes. Cambia esto para restringirlo a dominios específicos.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'X-API-KEY', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

// // Configuración para apuntar a los archivos estáticos de Angular
// app.use('/', express.static('client/dist/client', { redirect: false }));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client/dist/client/index.html'));
// });

/* ====================================================== */

const
    URLLocalDB = 'mongodb://localhost:27017/fooddayDB',
    // URLInternetDB = 'mongodb+srv://admin:admin@fooddaycluser.tk9zk.mongodb.net/FoodDayCluser?retryWrites=true&w=majority'
    URLInternetDB = 'mongodb+srv://torresdiego609:qZsDua9rKHDGPA8u@store-centli.tgx7u.mongodb.net/'
;

mongoose.set("useFindAndModify", false);
mongoose.connect(URLInternetDB, {useNewUrlParser: true, useUnifiedTopology: true} )
        .then(db => console.log("---> Conexión con base de datos establecida correctamente..."))
        .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

/* ====================================================== */

app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/* ====================================================== */

const all_routes = require('./routes/routes');
app.use('/', express.static('client/dist/client', {redirect: false}));
app.use('/', all_routes);

app.get('*', function(req, res, next) {
    res.sendFile(path.resolve('client/dist/client/index.html')); 
});

/* ====================================================== */

const PORT = process.env.PORT || 3977;
app.listen(PORT, () => {
    console.log(`---> La aplicación está corriendo en el puerto: ${PORT}`);
});
