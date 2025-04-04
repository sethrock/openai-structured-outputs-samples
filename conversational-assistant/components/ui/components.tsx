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

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % children.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative min-h-[420px] overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out h-full">
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full shrink-0 transition-all duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                opacity: index === currentIndex ? 1 : 0.3
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button 
          onClick={prevSlide}
          disabled={isAnimating}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          disabled={isAnimating}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      <div className="text-center mt-2 text-sm text-gray-600">
        {currentIndex + 1} of {children.length}
      </div>
    </div>
  );
};

const ServiceCard = ({ item_name, duration, description, price }: { item_name: string; duration: string; description: string; price: number }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg w-full h-[400px] relative overflow-hidden bg-white">
      <ProductImage item_name={item_name} primary_image={'some_image_url'}/>
      <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{item_name}</h3>
      <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{duration} Hour Service</p>
      <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 text-center line-clamp-3">{description}</p>
      <p className="text-base md:text-lg font-bold">${price}</p>
    </div>
  );
};

export default ServiceCard;