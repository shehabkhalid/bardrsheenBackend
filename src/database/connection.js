const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/badrsheen', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> console.log('Db Connected Successfully')).catch(()=>{console.log('DB Failed to Connect')})
