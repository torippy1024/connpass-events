import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TopPagePropsType } from "../types/types";

const TopPage = ({ connpassEvents }: TopPagePropsType) => {
  const [minAccepted, setMinAccepted] = useState(20);
  return (
    <div>
      <Header />
      <div className="container" id="top">
        <h1>Today's Events</h1>
        <RangeSlider
          value={minAccepted}
          max={50}
          step={5}
          tooltip='on'
          onChange={e => setMinAccepted(parseInt(e.target.value))}          
        />
        {connpassEvents.filter((event) => event.accepted >= minAccepted)
         .map((event, index) =>
          <div key={index} className="card">
            <div className="card-body">
              <h3><a href={event.event_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{event.title}</a></h3>
              <h4>参加人数：{event.accepted} / {event.limit}</h4>
              <p>開始時刻：{event.started_at.slice(11, 16)}</p>
              <p>開始時刻：{event.ended_at.slice(11, 16)}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TopPage;