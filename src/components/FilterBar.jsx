import React from 'react';
import { Filter, MapPin, Calendar } from 'lucide-react';
import './FilterBar.css';

const FilterBar = ({ years, selectedYear, onSelectYear, places, selectedPlace, onSelectPlace }) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <div className="filter-label">
          <Calendar size={18} />
          <span>연도별</span>
        </div>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedYear === 'all' ? 'active' : ''}`}
            onClick={() => onSelectYear('all')}
          >
            전체
          </button>
          {years.map(year => (
            <button 
              key={year}
              className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => onSelectYear(year)}
            >
              {year}년
            </button>
          ))}
        </div>
      </div>
      
      <div className="filter-divider"></div>

      <div className="filter-group">
        <div className="filter-label">
          <MapPin size={18} />
          <span>장소별</span>
        </div>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedPlace === 'all' ? 'active' : ''}`}
            onClick={() => onSelectPlace('all')}
          >
            전체
          </button>
          {places.map(place => (
            <button 
              key={place}
              className={`filter-btn ${selectedPlace === place ? 'active' : ''}`}
              onClick={() => onSelectPlace(place)}
            >
              {place}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
