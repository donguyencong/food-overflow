const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Conect to database
/*
mongoose.connect(config.database, config.dbOptions).then(function(){
    console.log('Success');
}, function(err){
    console.log('Error');
});
*/
const app = express();

const users = require('./routes/users');

const posts = require('./routes/posts');

//Port number
const port = 4000;

//Cors
app.use(cors());

// Body parser Middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//users
app.use('/users', users);

//posts
app.use('/posts', posts);

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});