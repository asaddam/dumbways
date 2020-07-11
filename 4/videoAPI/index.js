const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyparser.json());

app.listen(8000, () => {
    console.log('server running on port 8000')
});

app.get('/', (req,res) => {
    res.status(202).send('<h1>Selamat Datang di API Video!</h1>')
})

const { 
    videoRouter
} = require('./routers')

app.use('/api', videoRouter)



