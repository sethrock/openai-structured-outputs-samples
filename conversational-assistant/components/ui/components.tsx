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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto px-4">
      <div className="relative min-h-[420px]">
        {children[currentIndex]}
      </div>
      <div className="flex justify-between mt-4">
        <button 
          onClick={prevSlide}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button 
          onClick={nextSlide}
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
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

// Assuming this component renders the service cards.  The changes below are applied to a hypothetical service card component.  Adjust to match your actual component structure.
const ServiceCard = ({ item_name, duration, description, price }: { item_name: string; duration: string; description: string; price: number }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg w-full h-[400px] relative overflow-hidden">
      <ProductImage item_name={item_name} primary_image={'some_image_url'}/> {/*replace some_image_url with your image url */}
      <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{item_name}</h3>
      <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{duration} Hour Service</p>
      <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 text-center line-clamp-3">{description}</p>
      <p className="text-base md:text-lg font-bold">${price}</p>
    </div>
  );
};

// Example usage:
const MyComponent = () => {
  return (
    <CarouselComponent>
        <ServiceCard item_name="Service 1" duration="1" description="This is a sample service." price={50} />
        <ServiceCard item_name="Service 2" duration="2" description="Another service description." price={100} />
        {/* Add more service cards as needed */}
    </CarouselComponent>
  )
}

export default MyComponent;