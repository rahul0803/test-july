import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route exact path="/" component={HomePage } />
        <Route exact path="/item/:id" component={PostDetailPage} />
      </Routes>
    </div>
  );
};

export default App;
