import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center h-screen bg-neutral-200">
      <div className="">
        <h1 className="text-black font-extrabold underline text-4xl md:text-5xl">
          Welcome To Geshidan! Stop Procrastinating!
        </h1>
        <button className="w-44 mt-5 h-12 justify-center items-center  bg-slate-800 rounded-2xl text-white font-extrabold text-xl hover:bg-slate-600 transition-colors inline-block">
          <Link to="/todos">Get Started</Link>
        </button>
      </div>
    </main>
  );
};

export default WelcomePage;
