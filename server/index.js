let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const userRouter = require('./App/routes/web/userRoutes');
require('dotenv').config();
let app = express();
app.use(express.json());
app.use(cors())

app.use('/api/website/billing', userRouter);


mongoose.connect(process.env.DBurl).then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log('server is running in ', process.env.PORT);
    })
}).catch(err => {
    console.log(err)
})