import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import { ConnpassEventDataType } from './types/types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ROUTER_BASENAME =
  process.env.NODE_ENV === 'development' ? '/' : '/connpass-events';

function App() {
  const [connpassEvents, setConnpassEvents] = useState<ConnpassEventDataType[]>([{
    event_id: 0,
    title: "",
    catch: "",
    description: "",
    event_url: "",
    started_at: "",
    ended_at: "",
    limit: 0,
    hash_tag: "",
    event_type: "",
    accepted: 0,
    waiting: 0,
    place: "",
    address: ""
  }]);
  useEffect(() => {
    fetch("https://shima-shima.site/connpass-api/v1/events/0/")
      .then(res => res.json())
      .then(data => data.events.reverse())
      .then(events_ => events_.map((event_: any, index: any) => {
        const event: ConnpassEventDataType = {
          event_id: event_.event_id,
          title: event_.title,
          catch: event_.catch,
          description: event_.description,
          event_url: event_.event_url,
          started_at: event_.started_at,
          ended_at: event_.ended_at,
          limit: event_.limit,
          hash_tag: event_.hash_tag,
          event_type: event_.event_type,
          accepted: event_.accepted,
          waiting: event_.waiting,
          place: event_.place,
          address: event_.address
        };
        return event;
      }))
      .then(events => setConnpassEvents(events))
      .catch(err => "エラーが発生しました、ページをリロードして、もう一度トライしてください。");
  }, [])
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <Routes>
        <Route path="/" element={<TopPage connpassEvents={connpassEvents} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
