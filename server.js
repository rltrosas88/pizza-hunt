const express = require('express');
//18.1.5 step SIX set up Mongoose to connect when the app is started
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

//18.1.5 step SEVEN tell Mongoose which database to connect to
    //if the environment variable MONGODB_URI exists it use that or
        //it will short-circuit to the local MongoDB server's database at mongodb://localhost/pizza-hunt
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
