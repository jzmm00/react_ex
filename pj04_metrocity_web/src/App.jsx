import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import axios from 'axios';

import { Header, Footer } from './components/commen';
import { MainPage } from './pages/main';
import './App.css'

const Layout = () => {
    return (
        <div id='wrapper'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
