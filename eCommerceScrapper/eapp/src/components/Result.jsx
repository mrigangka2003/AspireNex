import demoP from "../assets/images/demoP.jpg";

const Result = ({data}) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/5 justify-center items-stretch rounded-lg">
      <div className="bg-white w-full p-4 flex justify-center items-center">
        <img
          src={data.imageUrl}
          alt="Demo"
          className="w-full h-auto max-w-xs object-scale-down"
        />
      </div>
      <div className="bg-red-900 w-full p-4 text-white flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
        <p className="text-base mb-2">Price: {data.price}</p>
        <p className="text-base mb-2">Rating: {data.rating}</p>
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
      </div>
    </div>
  );
};

export default Result;
