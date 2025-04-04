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
  return (
    <div className="flex overflow-x-auto space-x-2 md:space-x-4 p-2 md:p-4 -mx-2 md:-mx-4">
      {children}
    </div>
  );
};

// Assuming this component renders the service cards.  The changes below are applied to a hypothetical service card component.  Adjust to match your actual component structure.
const ServiceCard = ({ item_name, duration, description, price }: { item_name: string; duration: string; description: string; price: number }) => {
  return (
    <div className="flex flex-col items-center p-3 md:p-4 border rounded-lg w-full md:w-72 md:min-w-72 h-[300px] md:h-[400px] relative overflow-hidden">
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