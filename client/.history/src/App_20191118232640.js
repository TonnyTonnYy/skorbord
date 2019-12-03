import React, { Component } from 'react';
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/Skorbord';
mongoose.connect(mongoDB, { useNewUrlParser: true });

class App extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default App;