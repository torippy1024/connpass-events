import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TopPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
