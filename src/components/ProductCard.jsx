import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProductCard({ id, image, title, price, store, isSaved, onToggleSave }) {
  const handleHeartClick = (e) => {
    e.preventDefault();
    if (onToggleSave) onToggleSave(id);
  };

  return (
    <Link to={`/product/${id}`} style={{ display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '133%', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <button 
          onClick={handleHeartClick}
          style={{ 
            position: 'absolute', 
            bottom: '8px', 
            right: '8px', 
            background: 'rgba(255,255,255,0.9)', 
            border: 'none', 
            borderRadius: '50%', 
            width: '36px', 
            height: '36px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <Heart size={20} fill={isSaved ? "var(--color-primary, #DD8560)" : "none"} color={isSaved ? "var(--color-primary, #DD8560)" : "var(--color-black)"} />
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <h3 className="font-title" style={{ fontSize: '14px', marginBottom: '4px', letterSpacing: '1px' }}>{title}</h3>
        <p className="font-body-s" style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>{store}</p>
        <p className="font-price">{price}</p>
      </div>
    </Link>
  );
}
