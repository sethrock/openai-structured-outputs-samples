primary_image && (
      <div className="relative w-full">
        <img
          src={primary_image}
          alt={item_name || "Product image"}
          className="w-full h-auto mb-4 rounded-lg"
          onError={(e) => {
            e.currentTarget.src = "/imgs/service.jpg";
          }}
        />
      </div>
    )