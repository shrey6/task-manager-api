const mongoose = require('mongoose')
mongoose.connect(process.env.connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})

