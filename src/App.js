import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Layout />
      </Router>
    </React.StrictMode>
  );
}

export default App;
