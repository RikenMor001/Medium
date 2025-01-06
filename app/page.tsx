import Image from "next/image";
import { Appbar } from "./components/appbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Appbar />
      
      <div className="flex justify-center font-light text-black text-sm p-3 border-b border-slate-200 bg-gray-100">
        Get unlimited access to the best of Medium for less than $1/week.
      </div>

      <div className="grid grid-cols-[65%_35%] gap-4 mx-auto max-w-7xl mt-6">
        <div className="px-6">
          <div className="flex text-sm mb-8 border-b pb-3">
            <button className="text-slate-700 hover:text-slate-900 font-lightweight mr-4">For you </button>
            <button className="text-slate-700 hover:text-slate-900 font-lightweight">Following</button>
          </div>

          <div>
            <article className="mb-10">
              <h2 className="text-2xl font-bold">Zustand JS Makes React Too Easy</h2>
              <p className="text-sm font-semibold text-slate-500">Redux is officially dead.</p>
            </article>

            <article className="mb-10">
              <h2 className="text-2xl font-bold">Leave useEffect Alone!</h2>
              <p className="text-sm font-semibold text-slate-500">Avoiding unnecessary re-renders in React...</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold">Fixing This One Mistake Helped 2x My</h2>
              <p className="text-sm font-semibold text-slate-500">This is the actual content, where posts will appear...</p>
            </article>
          </div>
        </div>

        {/* Right Panel */}
        <aside className="border-l px-6">
          {/* Staff Picks */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Staff Picks</h2>
            <ul>
              <li className="mb-6">
                <a className="text-md font-semibold text-slate-700 hover:text-slate-500 cursor-pointer">How to Become a Better Writer?</a>
                <p className="text-sm text-slate-500 mt-1">Becoming a better writer requires a lot of practice...</p>
              </li>
              <li className="mb-6">
                <a className="text-md font-semibold text-slate-700 hover:text-slate-500 cursor-pointer">A Tip for Effective Remote Work</a>
                <p className="text-sm text-slate-500 mt-1">Communicate with your team members and clients...</p>
              </li>
              <li>
                <a className="text-md font-semibold text-slate-700 hover:text-slate-500 cursor-pointer">Mastering JavaScript in 2024</a>
                <p className="text-sm text-slate-500 mt-1">Mastering JavaScript in 2024 is a challenging...</p>
              </li>
            </ul>
          </section>

          {/* Recommended Topics */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Recommended Topics</h2>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-gray-100 px-4 py-2 rounded-3xl text-slate-900 text-sm hover:bg-gray-200 cursor-pointer">Technology</li>
              <li className="bg-gray-100 px-4 py-2 rounded-3xl text-slate-900 text-sm hover:bg-gray-200 cursor-pointer">Programming</li>
              <li className="bg-gray-100 px-4 py-2 rounded-3xl text-slate-900 text-sm hover:bg-gray-200 cursor-pointer">Science</li>
              <li className="bg-gray-100 px-4 py-2 rounded-3xl text-slate-900 text-sm hover:bg-gray-200 cursor-pointer">Productivity</li>
            </ul>
          </section>

          {/* Who to Follow */}
          <section>
            <h2 className="text-lg font-bold mb-4">Who to Follow</h2>
            <ul>
              {["Riken Patel", "Anonymous", "Anonymous"].map((name, index) => (
                <li className="flex items-center mb-6" key={index}>
                  <Image
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-4"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-bold text-md">{name}</p>
                    <p className="text-sm text-slate-500">A brief description about the user.</p>
                    <button className="px-4 py-2 rounded-3xl text-slate-900 text-sm border border-slate-900 hover:bg-gray-100 mt-2">Follow</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
