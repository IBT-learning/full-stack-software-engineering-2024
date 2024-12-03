import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import CreateRecipePage from './components/CreateRecipePage';
import EditRecipePage from './components/EditRecipePage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Client</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/create" element={<CreateRecipePage />} />
          <Route path="/edit/:id" element={<EditRecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
