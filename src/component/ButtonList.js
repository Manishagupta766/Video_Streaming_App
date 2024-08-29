import React, { useRef, useState, useEffect } from 'react';
import Button from './button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const list = [
  "All", "Live", "Gaming", "Music", "Sports", "News", "Learning",
  "Fashion", "Travel", "Movies", "Tech", "Health", "Fitness", 
  "Comedy", "Food", "Science", "History"
];

function ButtonList() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
      updateScrollState();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
      updateScrollState();
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [isMenuOpen]);

  return (
    <div className="relative flex items-center">
    
      <button
        onClick={scrollLeft}
        className={`absolute top-1/2 transform -translate-y-1/2 p-2 ${canScrollLeft ? 'text-black' : 'text-gray-400'} transition-colors duration-300`}
        style={{ left: '0.5rem' }}
        disabled={!canScrollLeft}
      >
        <FaChevronLeft className="text-2xl" />
      </button>

      
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide"
        style={{
          maxWidth: `calc(100vw - ${isMenuOpen ? '12rem' : '4rem'} - 4rem)`, 
          marginLeft: '2rem', 
          marginRight: '2rem',
        }}
        onScroll={updateScrollState}
      >
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>

    
      <button
        onClick={scrollRight}
        className={`absolute top-1/2 transform -translate-y-1/2 p-2 ${canScrollRight ? 'text-black' : 'text-gray-400'} transition-colors duration-300`}
        style={{ right: '0.5rem' }}
        disabled={!canScrollRight}
      >
        <FaChevronRight className="text-2xl" />
      </button>
    </div>
  );
}

export default ButtonList;
