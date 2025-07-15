import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ListPage, CreatePage, EditPage, DetailPage } from './pages';
import './App.css';

function App() {
    const [isReady, setIsReady] = useState(false);
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch('/data/initialDiary.json');
                const data = await res.json();
                sessionStorage.setItem('diary', JSON.stringify(data));
                setInitialData(data);
            } catch (e) {
                console.error('초기 데이터 로드 실패', e);
            } finally {
                setIsReady(true);
            }
        }
        load();
    }, []);

     if (!isReady) {
    return <div>데이터 로딩 중…</div>;
  }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ListPage initialData={initialData} />} path='/' />
                    <Route element={<CreatePage />} path='/new' />
                    <Route element={<EditPage />} path='/edit/:id' />
                    <Route element={<DetailPage />} path='/detail/:id' />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;