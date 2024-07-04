import demoP from "../assets/images/demoP.jpg";

const Result = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/5 justify-center items-stretch rounded-lg">
      <div className="bg-white w-full p-4 flex justify-center items-center">
        <img
          src={demoP}
          alt="Demo"
          className="w-full h-auto max-w-xs object-scale-down"
        />
      </div>
      <div className="bg-red-900 w-full p-4 text-white flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">Image Details</h2>
        <p className="text-base">
          Details will appear here.
        </p>
      </div>
    </div>
  );
};

export default Result;
