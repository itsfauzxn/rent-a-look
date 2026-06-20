import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { Home, Search, Heart, ArrowLeft, Send, User, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1C2.5 7.1 2.3 5 4.3 3.1 5.9 1.4 7.9 1.4 8.9 1.3 13.5 1 18.1 1.3 18.1 1.3c0 0 2 .1 3.6 1.8C23.7 5 23.5 7.1 23.5 7.1c.3 2 .3 6.1 0 8.1 0 0 .2 2.1-1.8 4-1.6 1.7-3.6 1.7-4.6 1.8-4.6.3-9.2 0-9.2 0s-2-.1-3.6-1.8c-2-1.9-1.8-4-1.8-4-.3-2-.3-6.1 0-8.1z"/>
    <polygon points="9.7 15.5 16 12 9.7 8.5 9.7 15.5"/>
  </svg>
);
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';
import './index.css';

// Mock Data
const MOCK_ITEMS = [
  { id: 1, title: "Modern Kutu Baru", price: "Rp 150.000", store: "Kebaya Ayu Malang", image: "/kebaya_gold.png", category: "Woman", location: "Near UB", description: "Elegant Kutu Baru kebaya perfect for your graduation day. Made with premium brocade.", care: "Dry clean only." },
  { id: 2, title: "Premium Black Jas", price: "Rp 120.000", store: "SuitUp Malang", image: "/jas_black.png", category: "Man", location: "Near UM", description: "Slim fit black suit for a sharp and formal look on your Wisuda.", care: "Dry clean only." },
  { id: 3, title: "Classic White Jas", price: "Rp 110.000", store: "SuitUp Malang", image: "/jas_black.png", category: "Man", location: "Near UMM", description: "Classic white suit for a standout graduation.", care: "Dry clean only." },
  { id: 4, title: "Elegant Gold Kebaya", price: "Rp 175.000", store: "Kebaya Ayu Malang", image: "/kebaya_gold.png", category: "Woman", location: "Near UB", description: "Gold colored premium kebaya with intricate detailing.", care: "Hand wash cold." }
];

const TopHeader = () => {
  return (
    <header className="top-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold', color: 'var(--color-black)' }}>
          Rent A Look
        </Link>
      </div>
      
      <nav className="desktop-nav">
        <Link to="/" className="font-subtitle-14" style={{ letterSpacing: '1px' }}>HOME</Link>
        <Link to="/explore" className="font-subtitle-14" style={{ letterSpacing: '1px' }}>EXPLORE</Link>
        <Link to="/orders" className="font-subtitle-14" style={{ letterSpacing: '1px' }}>ORDERS</Link>
        <div style={{ display: 'flex', gap: '16px', marginLeft: '24px' }}>
          <Link to="/explore" style={{ color: 'var(--color-black)' }}><Search size={20} /></Link>
          <Link to="/registerlogin" style={{ color: 'var(--color-black)' }}><User size={20} /></Link>
        </div>
      </nav>

      {/* Mobile Icons - hidden on desktop via CSS class */}
      <div className="mobile-icons" style={{ display: 'flex', gap: '16px' }}>
        <Link to="/explore" style={{ color: 'var(--color-black)' }}><Search size={24} /></Link>
        <Link to="/registerlogin" style={{ color: 'var(--color-black)' }}><User size={24} /></Link>
      </div>
    </header>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav shadow-box">
      <Link to="/" style={{ padding: '8px' }}>
        <Home size={24} color={path === '/' ? 'var(--color-black)' : 'var(--color-gray)'} />
      </Link>
      <Link to="/explore" style={{ padding: '8px' }}>
        <Search size={24} color={path === '/explore' ? 'var(--color-black)' : 'var(--color-gray)'} />
      </Link>
      <Link to="/orders" style={{ padding: '8px' }}>
        <Heart size={24} color={path === '/orders' ? 'var(--color-black)' : 'var(--color-gray)'} />
      </Link>
    </nav>
  );
};

const Footer = () => (
  <footer style={{ padding: '64px 16px 24px', textAlign: 'center', background: 'var(--color-white)' }}>
    <h3 className="font-title" style={{ fontSize: '18px', letterSpacing: '4px', marginBottom: '32px' }}>FOLLOW US</h3>

    <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto 40px', padding: '64px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-light-gray)' }}>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-black)', margin: 0, textAlign: 'center' }}>
        Rent A Look
      </h2>
    </div>

    <div style={{ width: '40px', height: '1px', background: 'var(--color-border)', margin: '0 auto 32px' }}></div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px' }}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-black)' }}>
        {/* TODO: Ganti Link Twitter */}
        <TwitterIcon />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-black)' }}>
        {/* TODO: Ganti Link Instagram */}
        <InstagramIcon />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-black)' }}>
        {/* TODO: Ganti Link Youtube */}
        <YoutubeIcon />
      </a>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <p className="font-body-m" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>support@rentlook.com</p>
      <p className="font-body-m" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>+62 0813 8110 2703</p>
      <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>08:00 - 22:00 WIB - Setiap Hari</p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
      <Link to="/about" className="font-subtitle-16" style={{ textDecoration: 'none', color: 'var(--color-black)', letterSpacing: '1px' }}>About</Link>
      <Link to="/contact" className="font-subtitle-16" style={{ textDecoration: 'none', color: 'var(--color-black)', letterSpacing: '1px' }}>Contact</Link>
      <Link to="/blog" className="font-subtitle-16" style={{ textDecoration: 'none', color: 'var(--color-black)', letterSpacing: '1px' }}>Blog</Link>
    </div>

    <p className="font-body-s" style={{ color: 'var(--color-gray)', background: 'var(--color-light-gray)', padding: '16px', margin: '0 -16px -24px' }}>
      Copyright© Rent A Look All Rights Reserved.
    </p>
  </footer>
);

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="font-title" style={{ marginBottom: '8px' }}>RENT A LOOK</h2>
        <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '0 auto 16px' }}></div>
        <p className="font-body-m" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          Your perfect graduation attire awaits
        </p>
      </div>
      
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%', marginBottom: '0', overflow: 'hidden' }}>
        {MOCK_ITEMS.map((item, index) => (
          <img 
            key={item.id}
            src={item.image} 
            alt={item.title} 
            style={{ 
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0
            }} 
          />
        ))}
        
        <div style={{ position: 'absolute', bottom: '24px', left: '0', right: '0', textAlign: 'center', zIndex: 10 }}>
           <Link to="/explore" className="btn-primary font-subtitle-14" style={{ display: 'inline-flex', padding: '12px 32px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
             Explore Collection
           </Link>
        </div>

        {/* Carousel Indicators */}
        <div style={{ position: 'absolute', bottom: '80px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
          {MOCK_ITEMS.map((_, index) => (
            <div 
              key={index} 
              style={{ 
                width: '8px', height: '8px', borderRadius: '50%', 
                background: index === currentIndex ? 'var(--color-white)' : 'rgba(255,255,255,0.5)',
                transition: 'background 0.3s ease'
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExplorePage = ({ savedItems, onToggleSave }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = MOCK_ITEMS.filter(item => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Man" || activeCategory === "Woman") return item.category === activeCategory;
    return item.location === activeCategory;
  });

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="font-title" style={{ marginBottom: '8px' }}>EXPLORE</h2>
        <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '0 auto 16px' }}></div>
      </div>
      
      <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <div className="product-grid">
        {filteredItems.map(item => (
          <ProductCard 
            key={item.id} 
            {...item} 
            isSaved={savedItems.includes(item.id)} 
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
      {filteredItems.length === 0 && (
        <div className="text-center" style={{ marginTop: '40px', color: 'var(--text-secondary)' }}>No items found for this category.</div>
      )}
    </div>
  );
};

const OrdersPage = ({ savedItems, onToggleSave }) => {
  const items = MOCK_ITEMS.filter(item => savedItems.includes(item.id));

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="font-title" style={{ marginBottom: '8px' }}>YOUR ORDERS</h2>
        <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '0 auto 16px' }}></div>
        <p className="font-body-m" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          Items you are interested in renting
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center" style={{ marginTop: '40px' }}>
          <Heart size={48} color="var(--color-border)" style={{ marginBottom: '16px' }} />
          <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>You haven't added any items yet.</p>
          <Link to="/explore" className="btn-outline" style={{ display: 'inline-block', marginTop: '24px', textDecoration: 'none' }}>Browse Collection</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '133px', objectFit: 'cover' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-title" style={{ fontSize: '16px', letterSpacing: '1px', marginBottom: '4px' }}>{item.title}</h3>
                <p className="font-body-m">{item.store}</p>
                <p className="font-price" style={{ marginTop: '8px', marginBottom: '16px' }}>{item.price}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                   <button className="btn-primary" onClick={() => alert(`Dialihkan ke WhatsApp/Chat untuk menghubungi ${item.store} menyewa ${item.title}`)} style={{ flex: 1, fontSize: '12px', padding: '8px 16px', minWidth: '120px' }}>
                     <Send size={16} /> Hubungi
                   </button>
                   <button className="btn-outline" onClick={() => onToggleSave(item.id)} style={{ padding: '8px 16px' }}>
                     Hapus
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductDetail = ({ savedItems, onToggleSave }) => {
  const { id } = useParams();
  const product = MOCK_ITEMS.find(p => p.id === parseInt(id)) || MOCK_ITEMS[0];
  const isSaved = savedItems.includes(product.id);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-black)', textDecoration: 'none' }}>
          <ArrowLeft size={20} /> <span className="font-subtitle-14">Back to Explore</span>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
        <div style={{ flex: '1 1 100%', minWidth: '300px', maxWidth: '500px', margin: '0 auto' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
          />
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h1 className="font-title" style={{ fontSize: '24px', letterSpacing: '4px', marginBottom: '8px' }}>{product.title}</h1>
            <p className="font-price" style={{ fontSize: '20px' }}>{product.price}</p>
          </div>

          {/* Size Selection Mockup */}
          <div>
            <p className="font-subtitle-14" style={{ marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tersedia Ukuran:</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {["S", "M", "L", "XL", "XXL"].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{ 
                    background: selectedSize === size ? 'var(--color-black)' : 'transparent',
                    color: selectedSize === size ? 'var(--color-white)' : 'var(--color-black)',
                    border: '1px solid var(--color-black)', 
                    padding: '8px 16px', 
                    borderRadius: '24px', 
                    fontSize: '14px', 
                    cursor: 'pointer',
                    minWidth: '48px',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-primary font-subtitle-14" onClick={() => alert(`Dialihkan ke WhatsApp/Chat untuk menghubungi ${product.store} menyewa ${product.title} (Ukuran: ${selectedSize})`)} style={{ flex: 1, padding: '16px 0', gap: '12px' }}>
              <Send size={20} /> HUBUNGI UNTUK SEWA
            </button>
            <button className={`btn-outline ${isSaved ? 'active' : ''}`} onClick={() => onToggleSave(product.id)} style={{ padding: '16px' }}>
              <Heart size={20} fill={isSaved ? "var(--color-white)" : "none"} />
            </button>
          </div>

          <div style={{ marginTop: '16px' }}>
            <h3 className="font-subtitle-16" style={{ marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Description</h3>
            <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
            <p className="font-body-m" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>{product.care}</p>
          </div>
          
          {/* Size Chart */}
          <div style={{ marginTop: '8px' }}>
            <h3 className="font-subtitle-16" style={{ marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Size Chart (Standard Indonesia)</h3>
            <div style={{ background: 'var(--color-light-gray)', padding: '16px', borderRadius: '4px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <div className="font-body-s"><strong style={{ color: 'var(--color-black)' }}>LD (Lingkar Dada):</strong><br/> 98 - 102 cm</div>
              <div className="font-body-s"><strong style={{ color: 'var(--color-black)' }}>PB (Panjang Badan):</strong><br/> 70 - 75 cm</div>
              <div className="font-body-s"><strong style={{ color: 'var(--color-black)' }}>PL (Panjang Lengan):</strong><br/> 55 - 60 cm</div>
              <div className="font-body-s"><strong style={{ color: 'var(--color-black)' }}>LB (Lebar Bahu):</strong><br/> 40 - 45 cm</div>
              <div className="font-body-s" style={{ gridColumn: '1 / -1' }}><strong style={{ color: 'var(--color-black)' }}>LP (Lingkar Pinggang):</strong><br/> 80 - 85 cm</div>
            </div>
            <p className="font-body-s" style={{ color: 'var(--text-secondary)', marginTop: '8px', fontStyle: 'italic' }}>
              *Toleransi ukuran 1-2 cm. Pengukuran di atas adalah estimasi untuk ukuran M.
            </p>
          </div>

          {/* Store Info */}
          <div style={{ marginTop: '16px', padding: '24px', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
            <h3 className="font-subtitle-16" style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={20} /> {product.store}
            </h3>
            <p className="font-body-m" style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Jl. Soekarno Hatta No. 9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
            </p>
            <a 
              href="https://maps.google.com/?q=Jl.+Soekarno+Hatta+No.+9,+Jatimulyo,+Kec.+Lowokwaru,+Kota+Malang,+Jawa+Timur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline font-subtitle-14"
              style={{ display: 'inline-flex', padding: '12px 24px', textDecoration: 'none', background: 'var(--color-black)', color: 'var(--color-white)', border: 'none', letterSpacing: '1px' }}
            >
              Buka di Peta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegisterLoginPage = () => (
  <div className="text-center my-4" style={{ paddingTop: '40px' }}>
    <h2 className="font-title">LOGIN / REGISTER</h2>
    <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '16px auto' }}></div>
    <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>Halaman Otentikasi User (Mockup).</p>
  </div>
);

const AboutPage = () => (
  <div className="text-center my-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
    <h2 className="font-title">ABOUT US</h2>
    <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '16px auto' }}></div>
    <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>Halaman About (Akan diisi nanti).</p>
  </div>
);

const ContactPage = () => (
  <div className="text-center my-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
    <h2 className="font-title">CONTACT</h2>
    <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '16px auto' }}></div>
    <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>Halaman Contact (Akan diisi nanti).</p>
  </div>
);

const BlogPage = () => (
  <div className="text-center my-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
    <h2 className="font-title">BLOG</h2>
    <div style={{ width: '40px', height: '1px', background: 'var(--color-black)', margin: '16px auto' }}></div>
    <p className="font-body-m" style={{ color: 'var(--text-secondary)' }}>Halaman Blog (Akan diisi nanti).</p>
  </div>
);

function App() {
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (id) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <Router>
      <div className="container">
        <TopHeader />
        <div className="page-content" style={{ paddingBottom: '80px', paddingTop: '24px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage savedItems={savedItems} onToggleSave={toggleSave} />} />
            <Route path="/product/:id" element={<ProductDetail savedItems={savedItems} onToggleSave={toggleSave} />} />
            <Route path="/orders" element={<OrdersPage savedItems={savedItems} onToggleSave={toggleSave} />} />
            <Route path="/registerlogin" element={<RegisterLoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
