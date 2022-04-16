const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin:'http://localhost:3000'
}));

app.get('/',(req,res)=>{
    res.json({
        message:'Hello World',
    })
})

app.use((req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

const port = process.env.PORT || 1337;
app.listen(port,()=>{
    console.log(`Listening at http://localhost:1337`);
})