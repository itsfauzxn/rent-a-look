import React from 'react';

export default function FilterBar({ activeCategory, setActiveCategory }) {
  const categories = ["All", "Man", "Woman", "Near UB", "Near UM", "Near UMM"];
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      overflowX: 'auto', 
      paddingBottom: '16px',
      marginBottom: '16px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      {categories.map((cat) => (
        <button 
          key={cat} 
          onClick={() => setActiveCategory(cat)}
          className={`btn-outline ${activeCategory === cat ? 'active' : ''}`}
          style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
