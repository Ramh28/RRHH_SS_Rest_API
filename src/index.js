const express = require('express');

const app = express();

//settings

app.set('port', process.env.PORT || 3306);

// Middleware

app.use(express.json());

//Routes

app.use(require('./routes/users'));

//Start

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});