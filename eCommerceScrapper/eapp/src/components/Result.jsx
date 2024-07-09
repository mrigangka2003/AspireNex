const Result = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/5 justify-center items-stretch rounded-lg">
      <div className="bg-white w-full p-4 flex justify-center items-center">
      <img
          src={data.imageUrl}
          alt="Product Image"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
        />
      </div>
      <div className="bg-zinc-900 w-full p-4 text-white flex flex-col justify-center">
        <p className="text-base mb-2">
          <p className="font-semibold">Title</p> :{data.title}
        </p>
        <p className="text-base mb-2">
          <p className="font-semibold">Price</p>: {data.price}
        </p>
        <p className="text-base mb-2">
          <p className="font-semibold">Rating</p>:: {data.rating}
        </p>
        <p className="text-base mb-2">
          <p className="font-semibold">Reviews</p>: {data.reviews}
        </p>
        <div className="text-base">
          {data.specs && Object.keys(data.specs).length > 0 && (
            <div className="text-base">
              <h3 className="text-lg font-bold mb-2">Specifications:</h3>
              <ul>
                {Object.entries(data.specs).map(([key, value]) => (
                  <li key={key} className="mb-1">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
