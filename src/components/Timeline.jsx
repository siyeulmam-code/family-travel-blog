import React from 'react';
import './Timeline.css';

const Timeline = ({ data }) => {
  if (data.length === 0) {
    return <div className="timeline-empty">선택한 조건에 맞는 여행 기록이 없습니다.</div>;
  }

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {data.map((item, index) => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">{item.year}년 {item.month}월</span>
            <h3 className="timeline-title">{item.year}년 {item.place}</h3>
            <p className="timeline-members">함께한 사람: {item.members.join(', ')}</p>
            {item.description && <p className="timeline-description">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
