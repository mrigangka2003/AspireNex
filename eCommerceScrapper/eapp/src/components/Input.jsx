const Input = () => {
  return (
    <div className="flex justify-center p-1 md:p-2">
      <input
        className="border border-solid border-white p-2 w-48 md:w-80 border-l border-t border-b rounded-tl-2xl rounded-bl-2xl bg-transparent"
        type="text"
        placeholder="Paste the Url"
      />
      <button className="font-semibold bg-white text-black border border-white rounded-tr-2xl rounded-br-2xl">Search</button>
    </div>
  );
};

export default Input;
