import Loader from "./Loader";
import useGif from "../hooks/useGif";

export default function Random() {
  const { loading, gif, value, setvalue, fetchGif } = useGif();

  function handlegenerate() {
    fetchGif();
  }

  return (
    <div className="w-[100%] min-h-[400px] mx-auto bg-green-700 rounded-lg mt-5 underline sm:w-[400px]">
      <p className="text-2xl font-bold text-center">Random gif</p>
      {loading ? (
        <Loader />
      ) : (
        <img src={gif} alt="Random GIF" className="mx-auto mt-4 w-[90%]" />
      )}

      <button
        className=" mx-auto my-4 px-8 py-2 rounded-lg bg-green-950 text-white hover:bg-black"
        onClick={handlegenerate}
      >
        Generate
      </button>
    </div>
  );
}
