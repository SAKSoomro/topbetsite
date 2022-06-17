import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import MatchOdds from './components/MatchOdds';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <AuthProvider>
  <App />
  </AuthProvider>
  </Router>
);
