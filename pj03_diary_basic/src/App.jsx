import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";

import { ListPage, CreatePage, EditPage, DetailPage } from './pages'

import './App.css';

function App() {
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const res = await axios.get('/data/initialDiary.json');
            const data = res.data;
            sessionStorage.setItem('diary', JSON.stringify(data));
        } catch (error) {
            console.error('데이터 로딩 실패:', error);
        }
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ListPage />} path='/' />
                    <Route element={<CreatePage />} path='/new' />
                    <Route element={<EditPage />} path='/edit/:id' />
                    <Route element={<DetailPage />} path='/detail/:id' />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;