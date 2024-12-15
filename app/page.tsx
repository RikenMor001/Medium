import Image from "next/image";
import { Appbar } from "./components/App";

export default async function Home() {
  return (
    <div>
      <Appbar />
      
      <div className="flex justify-center font-light text-black text-sm p-3 border-b">
        Get unlimited access to the best of Medium for less than $1/week.
      </div>
      
      <div>
        <div className="ml-3 h-screen grid grid-cols-[65%_35%] flex justify-center items-start">
          <div>
            <div className="flex text-sm mb-10 border-b">
              <div className="m-3 text-slate-500 hover:text-slate-900">
                <button>Follow</button>
              </div>
              <div className="m-3 text-slate-500 hover:text-slate-900">
                <button>Following</button>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-2xl font-bold">
                This is the title of the content
              </div>
              <div className="text-sm font-semibold text-slate-500">
                This is the actual content, where posts will appear. This is the actual content, where posts will appear 
              </div>
              <br />
            </div>
          </div>

          <div className="text-md h-screen border-l p-5">
            <div className="mb-8">
              <h2 className="text-md font-semibold mb-4">Staff Picks</h2>
              <div className="m-2">
                <ul>
                  <li className="text-md mb-4">
                    <a className="text-slate-900 hover:text-slate-500 font-bold hover:cursor-pointer">How to Become a Better Writer</a>
                    <div>
                      <div className="text-sm text-slate-500">
                        Becoming a better writer requires a lot of practice and patience. It&apos;s not something that can be done overnight. But it&apos;s something that you can do every day.
                      </div>
                    </div>
                  </li>

                  <li className="text-md mb-4">
                    <a className="text-slate-900 hover:text-slate-500 font-bold hover:cursor-pointer">A tip for Effective Remote Work</a>
                    <div className="text-sm text-slate-500">
                      Communicate with your team members and clients through video conferencing. This will help you to build better relationships with them.
                    </div>
                  </li>

                  <li className="text-md mb-4">
                    <a className="text-slate-900 hover:text-slate-500 font-bold hover:cursor-pointer">Mastering JavaScript in 2024</a>
                    <div className="text-sm text-slate-500">
                      Mastering JavaScript in 2024 is a challenging but rewarding task. It requires a lot of practice and patience. But with the right mindset and approach, you can achieve it.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-md font-bold mb-4">Recommended Topics</h2>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-100 px-4 py-2 rounded-3xl hover:text-slate-500 text-slate-900 text-sm">Technology</li>
                <li className="bg-gray-100 px-4 py-2 rounded-3xl hover:text-slate-500 text-slate-900 text-sm">Programming</li>
                <li className="bg-gray-100 px-4 py-2 rounded-3xl hover:text-slate-500 text-slate-900 text-sm">Science</li>
                <li className="bg-gray-100 px-4 py-2 rounded-3xl hover:text-slate-500 text-slate-900 text-sm">Productivity</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Who to Follow</h2>
              <ul>
                <li className="flex items-center mb-4">
                <Image
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-bold text-md">Riken Patel</div>
                    <div className="text-sm text-slate-500">
                      A famous trader and coder. The best in business and billionaire.
                    </div>
                    <button className="px-4 py-2 rounded-3xl hover:text-black text-slate-900 text-sm border border-black">Follow</button>
                  </div>
                </li>

                <li className="flex items-center mb-4">
                  <Image
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-bold">Anonymous</div>
                    <div className="text-sm text-slate-500">
                      An anonymous person from planet earth.
                    </div>
                    <button className="px-4 py-2 rounded-3xl hover:text-black text-slate-900 text-sm border border-black">Follow</button>
                  </div>
                </li>

                <li className="flex items-center mb-4">
                <Image
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-bold">Anonymous</div>
                    <div className="text-sm text-slate-500">
                      An anonymous person from planet earth.
                    </div>
                    <button className="px-4 py-2 rounded-3xl hover:text-black text-slate-900 text-sm border border-black">Follow</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
