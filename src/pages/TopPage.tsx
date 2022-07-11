/** @jsxImportSource @emotion/react */

// import { css } from "@emotion/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { DaysType, TopPagePropsType } from "../types/types";

const TopPage = ({ connpassEvents, dayDisplay, setDayDisplay, eventsDates}: TopPagePropsType) => {
  const [minAccepted, setMinAccepted] = useState(20);
  const keyDays: DaysType[] = [0, 1, 2, 3, 4, 5, 6];
  const convertStringToKey = (value: string): DaysType => {
    for (const key of keyDays) {
      if (Number(value) === key) return key;
    }
    return 0;
  };
  return (
    <div>
      <Header />
      <div className="container" id="top">
        <h1>{`${parseInt(eventsDates["days"][dayDisplay].slice(4, 6))}/${eventsDates["days"][dayDisplay].slice(6, 8)}`}開催のイベント</h1>
        <p>
          参加人数：
          <input
            type="range"
            value={minAccepted}
            max={50}
            step={5}
            onChange={e => setMinAccepted(parseInt(e.target.value))}          
          />
          <b><big>{minAccepted}</big></b>人以上
        </p>
        <p>
          日付：
          <select onChange={e => setDayDisplay(convertStringToKey(e.target.value))}>
            {keyDays.map((value, index) =>
              <option value={value} key={index}>{`${parseInt(eventsDates["days"][value].slice(4, 6))}/${eventsDates["days"][value].slice(6, 8)}`}</option>
            )}
          </select>
        </p>
        {connpassEvents.filter((event) => event.accepted >= minAccepted)
        .map((event, index) =>
          <div key={index} className="card border-success mb-2">
            <div className="card-header">
                <div>参加人数：{event.accepted}{event.limit ? ` / ${event.limit}` : ""}</div> 
                <div>{event.started_at.slice(11, 16)} ~ {event.ended_at.slice(11, 16)}</div>
            </div>
            <div className="card-body">
              <h3 className="card-title"><a href={event.event_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-success">{event.title}</a></h3>
              <div className="card-text text-muted">
                <p className="text-truncate">{event.description.replace(/(<([^>]+)>)/gi, '')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TopPage;