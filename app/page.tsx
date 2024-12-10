
import axios from "axios";
import { Appbar } from "./components/App";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();
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
              <div className="m-3">
                <button>Follow</button>
              </div>
              <div className="m-3">
                <button>Following</button>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
              <div className="text-xl font-bold">
                This is the title of the content
              </div>
              <div className="text-md text-slate-600">
                This is the actual content, where posts will appear.This is the actual content, where posts will appear 
              </div>
              <br />
            </div>
          </div>

          <div className="text-md h-screen border-l p-5">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Suggested Blogs</h2>
              <ul>
                <li className="text-md mb-2">
                  <a href="#" className="text-slate-900 hover:text-slate-500">How to Become a Better Writer</a>
                  <div>
                    <div className="text-sm text-slate-500">
                      Becoming better writer requires alot of practice and patience. It's not something that can be done overnight. But it's something that you can do everyday.
                    </div>
                  </div>
                </li>

                <li className="text-md mb-2">
                  <a href="#" className="text-slate-900 hover:text-slate-500">A tip for Effective Remote Work</a>
                  <div className="text-sm text-slate-500">
                    Communincate with your team members and clients through video conferencing. This will help you to build better relationships with them.
                  </div>
                </li>

                <li className="text-md mb-2">
                  <a href="#" className="text-slate-900 hover:text-slate-500">Mastering JavaScript in 2024</a>
                  <div className="text-sm text-slate-500">
                    Mastering JavaScript in 2024 is a challenging but rewarding task. It requires a lot of practice and patience. But with the right mindset and approach, you can achieve it.
                  </div>
                </li>
              </ul>
              
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Recommended Topics</h2>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-900 px-3 py-1 rounded hover:text-slate-500 text-white">Technology</li>
                <li className="bg-gray-900 px-3 py-1 rounded hover:text-slate-500 text-white">Health</li>
                <li className="bg-gray-900 px-3 py-1 rounded hover:text-slate-500 text-white">Writing</li>
                <li className="bg-gray-900 px-3 py-1 rounded hover:text-slate-500 text-white">Productivity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Who to Follow</h2>
              <ul>

                <li className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">Riken Patel</div>
                    <button className="text-slate-900 hover:text-slate-500">Follow</button>
                  </div>
                </li>

                
                <li className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">Anonymus</div>
                    <button className="text-slate-900 hover:text-slate-500">Follow</button>
                  </div>
                </li>

                
                <li className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile Pic"
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">Anonymus</div>
                    <button className="text-slate-900 hover:text-slate-500">Follow</button>
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




