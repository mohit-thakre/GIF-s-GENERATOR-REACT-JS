import useGif from "../hooks/useGif";
import Loader from "./Loader";

export default function Tag() {
  const { loading, gif, value, setvalue, fetchGif } = useGif();
  function handlegenerate() {
    fetchGif();
  }
  return (
    <div className="w-[100%] min-h-[400px] mx-auto bg-green-700 rounded-lg mt-5 underline sm:w-[400px]">
      <p className="text-2xl font-bold text-center">Random {value} gif</p>
      {loading ? (
        <Loader />
      ) : (
        <img src={gif} alt="Random GIF" className="mx-auto mt-4 w-[90%]" />
      )}
      <input
        className="mx-auto mt-4 px-8 py-2 rounded-lg"
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder="search"
      ></input>
      <br></br>
      <button
        className=" mx-auto my-4 px-8 py-2 rounded-lg bg-green-950 text-white hover:bg-black"
        onClick={handlegenerate}
      >
        Generate
      </button>
    </div>
  );
}
