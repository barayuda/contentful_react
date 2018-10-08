import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import * as contentful from 'contentful'
import App from './App'
import './index.css'

var client = contentful.createClient({
  space: '3cagkig24agh',
  accessToken: '5450e577c55109cb7076e901b6cecfd97567c8a4f2fc735b101ebcc5370f3876' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
