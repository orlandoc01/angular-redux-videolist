'use strict';
let express = require('express');
let path = require('path');
let morgan = require('morgan');

let app = express();
let port = process.env.PORT || 3000; 

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));


app.listen(port, () => console.log(`Server running on port ${port}`));
