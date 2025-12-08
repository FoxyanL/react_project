import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
