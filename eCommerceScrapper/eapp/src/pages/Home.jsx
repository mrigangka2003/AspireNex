import { useState } from "react";
import Input from "../components/Input";
import Result from "../components/Result";
import { Switch, FormControlLabel, Button } from "@mui/material";

const Home = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [compare, setCompare] = useState(false);
  const [result2, setResult2] = useState(null);
  const [error2, setError2] = useState(false);
  const [bothResultsFetched, setBothResultsFetched] = useState(false);

  const handleSwitchChange = (e) => {
    setCompare((prev) => !prev);
  };

  const handleCompareClick = () => {
    if (result && result2) {
      setBothResultsFetched(true);
    } else {
      setError(true);
      setError2(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white bg-custom-bg bg-cover bg-center">
      <div className="flex flex-col justify-center items-center text-center mt-20 ">
        <h1 className="text-5xl font-bold font-mono">Webwise</h1>
        <h4 className="text-3xl mt-2 font-serif">Shop smarter, not harder</h4>
      </div>
      <div className="w-full max-w-md px-4 my-4">
        <div className="flex items-center">
          <Input setResult={setResult} setError={setError} />
          <FormControlLabel
            control={
              <Switch
                checked={compare}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label="Compare"
            labelPlacement="start"
            className="ml-4"
          />
        </div>
      </div>
      {compare && (
        <div className="w-full max-w-md px-4 my-4 flex flex-col items-center">
          <Input setResult={setResult2} setError={setError2} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompareClick} 
            className="mt-4"
          >
            Compare Results
          </Button>
        </div>
      )}
      <div className="flex flex-col items-center w-full max-w-4xl px-4 my-1">
        {result && <Result data={result} />}
        {compare && bothResultsFetched && result2 && <Result data={result2} />}
        {(error || error2) && (
          <p className="bg-white text-red-700 mt-4">
            Something Went Wrong
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
