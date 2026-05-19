import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import Timeline from './components/Timeline';
import GalleryCard from './components/GalleryCard';
import './App.css';

const travelData = [
  {
    id: 1,
    year: '2025',
    month: '1',
    place: '제주도',
    members: ['아빠', '엄마', '민우'],
    title: '새해 맞이 제주도 겨울 여행',
    description: '눈 내리는 한라산의 비경과 따뜻한 감귤 밭에서의 즐거운 시간. 우리가족의 첫 번째 겨울 제주도 여행을 기록합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1669?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    year: '2024',
    month: '8',
    place: '강릉',
    members: ['아빠', '엄마', '민우', '할머니'],
    title: '여름 바다와 시원한 바람',
    description: '할머니와 함께한 강릉 경포대 해수욕장. 푸른 바다를 보며 먹었던 초당 순두부가 정말 맛있었어요. 파도 소리가 아직도 들리는 듯합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1551041777-ed277b8db348?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    year: '2024',
    month: '5',
    place: '경주',
    members: ['아빠', '엄마', '민우'],
    title: '역사 탐방, 경주 불국사',
    description: '교과서에서만 보던 다보탑과 석가탑을 직접 본 날. 첨성대 주변의 아름다운 야경까지, 너무 완벽했던 가족 여행이었습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1590514934376-78c66e9fa2ec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    year: '2023',
    month: '10',
    place: '남해',
    members: ['아빠', '엄마', '민우'],
    title: '가을 단풍과 남해 바다',
    description: '아름다운 다랭이 마을과 독일 마을을 둘러보고, 남해의 푸른 바다를 만끽했던 소중한 가을 여행 기록입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1610368142981-b5413ff59b6c?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState('all');
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' or 'timeline'

  const years = useMemo(() => {
    const uniqueYears = [...new Set(travelData.map(item => item.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const places = useMemo(() => {
    return [...new Set(travelData.map(item => item.place))];
  }, []);

  const filteredData = useMemo(() => {
    return travelData.filter(item => {
      const matchYear = selectedYear === 'all' || item.year === selectedYear;
      const matchPlace = selectedPlace === 'all' || item.place === selectedPlace;
      return matchYear && matchPlace;
    }).sort((a, b) => {
      // 최신순 정렬 (연도, 월 기준)
      if (a.year !== b.year) return parseInt(b.year) - parseInt(a.year);
      return parseInt(b.month) - parseInt(a.month);
    });
  }, [selectedYear, selectedPlace]);

  return (
    <div className="app">
      <Hero />
      
      <main className="container">
        <FilterBar 
          years={years} 
          selectedYear={selectedYear} 
          onSelectYear={setSelectedYear}
          places={places}
          selectedPlace={selectedPlace}
          onSelectPlace={setSelectedPlace}
        />

        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'gallery' ? 'active' : ''}`}
            onClick={() => setViewMode('gallery')}
          >
            갤러리로 보기
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'timeline' ? 'active' : ''}`}
            onClick={() => setViewMode('timeline')}
          >
            타임라인으로 보기
          </button>
        </div>

        {viewMode === 'gallery' ? (
          filteredData.length > 0 ? (
            <div className="gallery-grid">
              {filteredData.map(item => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty-state">조건에 맞는 여행 기록이 없습니다.</div>
          )
        ) : (
          <Timeline data={filteredData} />
        )}
      </main>
      
      <footer className="footer">
        <p>© 2026 우리 가족의 소중한 여행 기록. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
