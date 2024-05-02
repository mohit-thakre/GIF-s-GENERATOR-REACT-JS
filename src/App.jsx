import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="text-center p-7 bg-emerald-950 w-full min-h-screen ">
      <h1 className=" text-4xl font-bold mx-4 py-3 px-2 rounded-xl text-white bg-green-900">
        RANDOM GIF'S
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
