const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const items = require('./routes/api/notes')
//const Item = require('./models/Note')

// initializing our app
const app = express();

// setting up body-parser
app.use(bodyParser.json());

// get the mongoDB uri (mongoDB Atlas) that we set up in the keys.js in config
const db = require('./config/keys').mongoURI;

// connecting to mongodb using mongoose
// .then() is a promise, which is only fired AFTER connecting
// unifiedTopology and useNewUrlParser are somethings the newer version
// of mongoose requires, hence why they're there.
mongoose
  .connect(db,{useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {console.log("Connected to mongoDB!")})
  .catch(err => {console.log(err)});


// This is where our app.get / app.post would go
// as we're using routes, this is where we tell our server to use routes
//app.use('/api/notes', notes);


// the first for heroku, second local
const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server running on ${port}`)});

