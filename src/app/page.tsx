import LeftSideBar from "@/component/LeftSideBar"
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai"
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs"
import { IoShareOutline, IoStatsChart } from "react-icons/io5"


const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar for navigation header */}
        <LeftSideBar/>
        <main className="ml-[275px] mx-2 w-full max-w-2xl h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full">
              <input 
                type="text" 
                className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
                placeholder="Whats Happening?"/>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:opacity-70 transition duration-200 font-bold">
                  Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i) => (
                <div 
                key={i} 
                className="border-b-[0.5px] p-2 flex space-x-4 border-gray-600">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full">

                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center space-x-1 w-full">
                        <div className="font-bold">Club Of Coders</div>
                        <div className="text-gray-500">@ClubOfCoders</div>
                        <div className="text-gray-500">
                          <BsDot/>
                        </div>
                        <div className="text-gray-500">1 hour Ago</div>
                      </div>
                      <div>
                          <BsThreeDots/>
                        </div>
                    </div>
                    <div className="text-white text-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate facilis nemo dignissimos officiis nostrum aperiam assumenda, a maiores earum maxime nam eaque sapiente quaerat quos ipsam. Odio voluptatum ipsam autem vero? Est obcaecati, beatae sit ullam voluptates consectetur! Quisquam quasi aperiam consectetur veniam voluptatibus animi. Dolorum earum totam fugiat aperiam!
                    </div>
                    <div className="bg-slate-400 aspect-square rounded-xl w-full h-96 mt-2">

                    </div>
                    <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                      <div className="rounded-full hover:bg-white/15 transition duration-200 p-3 cursor-pointer">
                        <BsChat/>
                      </div>
                      <div className="rounded-full hover:bg-white/15 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineRetweet/>
                      </div>
                      <div className="rounded-full hover:bg-white/15 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineHeart/>
                      </div>
                      <div className="rounded-full hover:bg-white/15 transition duration-200 p-3 cursor-pointer">
                        <IoStatsChart/>
                      </div>
                      <div className="rounded-full hover:bg-white/15 transition duration-200 p-3 cursor-pointer">
                        <IoShareOutline/>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </div>
  )
}

export default Home