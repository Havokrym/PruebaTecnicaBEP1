const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/Prueba';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false
};

mongoose.connect(url, options)
    .then(()=>{
        console.log('base conectada')
    })
    .catch((err)=>{
        console.error('Error en conexion', err)
    })

    require('./models/accidentes.model');
module.exports = mongoose;