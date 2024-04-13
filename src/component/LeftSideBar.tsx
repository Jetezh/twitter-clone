import { BiHomeCircle, BiUser } from "react-icons/bi"
import { HiOutlineHashtag } from "react-icons/hi"
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs"
import Link from "next/link"

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

const LeftSideBar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-skretch h-screen px-6">
          <div className="flex flex-col items-skretch h-full space-y-4 mt-4">
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className="hover:bg-white/30 text-xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6" href={`/${item.title.toLowerCase()}`} key = {item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  {item.title !== 'Twitter' && <div>{item.title}</div>}
                </Link>
              ))
            }
            <button className="rounded-full m-4 bg-primary p-3 text-2xl text-center hover:opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-3 text-center hover:bg-white/20 transition duration-200 w-full justify-between">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-400 w-12 h-12"></div>
                <div className="text-left text-sm">
                  <div className="font-semibold">Club Of Coders</div>
                  <div className="">@ClubOfCoders</div>
                </div>
              </div>
              <div>
                <BsThreeDots/>
              </div>
            </button>
        </section>
  )
}

export default LeftSideBar