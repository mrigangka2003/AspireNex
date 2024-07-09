import { useState } from "react";

const Input = ({ setResult, setError, setLoading }) => {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchResults = async () => {
    setLoading(true);
    setError(false); 
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    fetchResults();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center p-1 md:p-2"
      method="post"
      action="/"
    >
      <input
        className="border border-solid border-white p-2 w-48 md:w-80 border-l border-t border-b rounded-tl-2xl rounded-bl-2xl bg-transparent"
        type="text"
        placeholder="Paste the Url"
        value={url}
        onChange={handleInputChange}
      />
      <button className="font-semibold bg-white text-black border border-white rounded-tr-2xl rounded-br-2xl">
        Search
      </button>
    </form>
  );
};

export default Input;
