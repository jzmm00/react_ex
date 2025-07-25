import { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";

import { ListPage, CreatePage, EditPage, DetailPage } from './pages';
import './App.css';


const initialDataReducer = (state, action) => {
    let newDiary = [];
    switch (action.type) {
        case 'INIT':
            return action.initData;
        case 'CREATE':
            newDiary = [
                ...state,        
                { ...action.data }
            ];
            break;
        case 'REMOVE':
            newDiary = state.filter(item => item.id !== action.targetId);   
            break;
        case 'UPDATE':
            newDiary = state.map(item => item.id === action.data.id ? {...action.data} : item);
            break;
    }
    return newDiary;     
}

function App() {
    const [initialData, initialDataDispatch] = useReducer(initialDataReducer, []);

    useEffect(() => {
        async function load() {
            const res = await axios.get('/data/initialDiary.json');
            initialDataDispatch({ 
                type: 'INIT', 
                initData: res.data 
            });
        }
        load();
    }, []);

    const onCreate = (data) => {
        initialDataDispatch({
            type: 'CREATE',
            data: {
                id : data.id,
                title : data.title,
                date : data.date,
                weather : data.weather,
                content : data.content
            }
        });
    }

    const onUpdate = (targetId, formData) => {
        initialDataDispatch({
            type : 'UPDATE',
            data : {
                id: targetId,
                title: formData.title,
                date: formData.date,
                weather: formData.weather,
                content: formData.content
            }
        })
    }

    const onRemove = (targetId) => {
        initialDataDispatch({
            type: 'REMOVE',
            targetId
        });
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ListPage initialData={initialData} />} path='/' />
                    <Route element={<CreatePage onCreate={onCreate} />} path='/new' />
                    <Route element={<EditPage initialData={initialData} onUpdate={onUpdate} />} path='/edit/:id' />
                    <Route element={<DetailPage initialData={initialData} onRemove={onRemove} />} path='/detail/:id' />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;