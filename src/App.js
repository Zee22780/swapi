import './App.css';
import  { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './Pages/StarshipList';
import StarshipPage from './Pages/StarshipPage';

function App() {
  return (
    <>
      <h1 id="top-bar">Star Wars Starships</h1>
    <Routes>
      <Route path='/' element={<StarshipList />} />
      <Route path='/starship' element={<StarshipPage />}/>
    </Routes>
    </>

  );
}

export default App;
