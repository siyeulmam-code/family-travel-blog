import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import './GalleryCard.css';

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <img src={item.imageUrl} alt={`${item.place} 여행 사진`} />
      </div>
      <div className="gallery-content">
        <div className="gallery-header">
          <span className="gallery-date">
            <Calendar size={14} />
            {item.year}.{item.month}
          </span>
          <span className="gallery-place">
            <MapPin size={14} />
            {item.place}
          </span>
        </div>
        <h3 className="gallery-title">{item.title || `${item.year}년 ${item.place}`}</h3>
        <p className="gallery-members">
          <Users size={14} />
          {item.members.join(', ')}
        </p>
        <p className="gallery-description">{item.description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
