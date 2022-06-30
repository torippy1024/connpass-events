import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import { ConnpassEventDataType, DaysType, EventsDatesType } from './types/types';
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
  const [eventsDates, setEventsDates] = useState<EventsDatesType>({
    updateTime: "",
    days: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
    }
  });
  const [dayDisplay, setDayDisplay] = useState<DaysType>(0);
  useEffect(() => {
    fetch("https://shima-usa.net/connpass-api/v1/date/")
      .then(res => res.json())
      .then(date => setEventsDates({
        updateTime: date["update-time"],
        days: {
            0: date["days"]["0"],
            1: date["days"]["1"],
            2: date["days"]["2"],
            3: date["days"]["3"],
            4: date["days"]["4"],
            5: date["days"]["5"],
            6: date["days"]["6"],
        }        
      }))
      .catch(err => "エラーが発生しました、ページをリロードして、もう一度トライしてください。");
  }, []);
  useEffect(() => {
    fetch(`https://shima-usa.net/connpass-api/v1/events/${dayDisplay}/`)
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
  }, [dayDisplay])
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <Routes>
        <Route path="/" element={<TopPage connpassEvents={connpassEvents} dayDisplay={dayDisplay} setDayDisplay={setDayDisplay} eventsDates={eventsDates}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
