import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import { ConnpassEventDataType } from './types/types';

const ROUTER_BASENAME =
    process.env.NODE_ENV === 'development' ? '/' : '/connpass-events';

function App() {
    const [connpassEvents, setConnpassEvents] = useState<ConnpassEventDataType[]>([{
        title: "",
        description: "",
        event_url: "",
        started_at: "",
        ended_at: ""
    }]);
    useEffect(() => {
        fetch("https://shima-shima.site/connpass-api/today.json")
            .then(res => res.json())
            .then(data => data.events.reverse())
            .then(events_ =>  events_.map((event_: any, index: any) => {
                const event: ConnpassEventDataType = {
                    title: event_.title,
                    description: event_.description,
                    event_url: event_.event_url,
                    started_at: event_.started_at,
                    ended_at: event_.ended_at   
                }; 
                return event;
            }))
            .then(events => setConnpassEvents(events))
            .catch(err => "エラーが発生しました、ページをリロードして、もう一度トライしてください。");
    }, [])
    return (
        <BrowserRouter basename={ROUTER_BASENAME}>
            <Routes>
                <Route path="/" element={<TopPage connpassEvents={connpassEvents}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
