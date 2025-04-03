primary_image && (
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
    )