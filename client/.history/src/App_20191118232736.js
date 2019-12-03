import React, { Component } from 'react';
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/Skorbord';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected");
});

class App extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default App;