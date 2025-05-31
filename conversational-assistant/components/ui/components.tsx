import React from 'react';

interface ImageProps {
  primary_image?: string;
  item_name?: string;
}

export const ProductImage = ({ primary_image, item_name }: ImageProps) => primary_image ? (
  <div className="relative w-full">
    <img
      src={primary_image.startsWith('http') ? primary_image : '/imgs/service.jpg'}
      alt={item_name || 'Service image'}
      className="w-full h-auto mb-4 rounded-lg object-cover"
      onError={(e) => {
        e.currentTarget.src = '/imgs/service.jpg';
      }}
    />
  </div>
) : null;

export const CarouselComponent = ({ children }: { children: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const nextSlide = () => {
    if (!isAnimating && children.length > 1) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % children.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && children.length > 1) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!children || children.length === 0) {
    return <div className="text-center text-gray-500">No items to display</div>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-6">
      {/* Main carousel container */}
      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-center">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${children.length * 100}%`
            }}
          >
            {children.map((child, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + children.length) % children.length;
              const isNext = index === (currentIndex + 1) % children.length;
              const isVisible = isActive || isPrev || isNext;

              return (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 px-2 transition-all duration-300 ease-out cursor-pointer
                    ${isActive ? 'w-full md:w-1/2 lg:w-1/3' : 'w-0 md:w-1/4 lg:w-1/5'}
                    ${isVisible ? 'opacity-100' : 'opacity-0 md:opacity-60'}
                    ${!isActive ? 'scale-75 md:scale-90' : 'scale-100'}
                  `}
                  onClick={() => !isActive && goToSlide(index)}
                  style={{
                    width: isActive ? '100%' : isVisible ? '280px' : '0px'
                  }}
                >
                  <div className={`
                    h-full transition-all duration-300
                    ${isActive ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                    ${!isActive ? 'hover:scale-105' : ''}
                  `}>
                    {child}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {children.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous slide"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-700 group-hover:text-black transition-colors"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next slide"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-700 group-hover:text-black transition-colors"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {children.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`
                w-3 h-3 rounded-full transition-all duration-200 
                ${index === currentIndex 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
                disabled:opacity-50
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ item_name, duration, description, price }: { item_name: string; duration: string; description: string; price: number }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 h-[420px] flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <ProductImage item_name={item_name} primary_image={'some_image_url'}/>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-800">${price}</span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item_name}</h3>
          <p className="text-sm text-gray-500 mb-2">{duration} Hour Service</p>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-4">
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200">
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;