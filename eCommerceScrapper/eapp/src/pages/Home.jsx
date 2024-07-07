import { useState } from "react";
import Input from "../components/Input";
import Result from "../components/Result";

const Home = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white bg-custom-bg bg-cover bg-center">
      <div className="flex flex-col justify-center items-center text-center mt-20 ">
        <h1 className="text-5xl font-bold font-mono">Webwise</h1>
        <h4 className="text-3xl mt-2 font-serif">Shop smarter, not harder</h4>
      </div>
      <div className="w-full max-w-md px-4 my-4">
        <Input setResult={setResult} setError={setError} />
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl px-4 my-1">
        {result && <Result data={result}/>}
        {error && <p className=" bg-white text-red-700 mt-4">Something Went Wrong</p>}
      </div>
    </div>
  );
};

export default Home;
