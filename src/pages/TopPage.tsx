import Footer from "../components/Footer";
import Header from "../components/Header";
import { TopPagePropsType } from "../types/types";

const TopPage = ({ connpassEvents }: TopPagePropsType) => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>【connpass】本日のイベント</h1>
        {connpassEvents.map((event, index) =>
          <div key={index} className="card">
            <div className="card-body">
              <h2><a href={event.event_url} target="_blank" rel="noopener noreferrer">{event.title}</a></h2>
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