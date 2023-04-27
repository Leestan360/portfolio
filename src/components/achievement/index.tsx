import * as React from "react";
import { Link } from "react-router-dom";
import {AchievementType} from "../../types"


type Props = {
  key: number
  achievement: AchievementType
}

const AchievementCard = ({key, achievement}: Props) => {
  return (
      <div key={key} className="border border-gray-300 w-auto text-center rounded-lg py-8 px-4 my-6 shadow-lg hover:shadow-xl bg-white cursor-pointer">
          <p className="my-16">Icon</p>
          <p className="font-bold text-lg my-2 text-[#1DA1F2]">
            {achievement.title}
          </p>
          <p className="my-4 text-gray-500 font-thin">
            {achievement.subtitle}
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link
              to=""
              className="border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
            >
              Certification
            </Link>
            <Link
              to=""
              className="border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
            >
              Award Letter
            </Link>
            <Link
              to=""
              className="border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
            >
              Google Code-in Blog
            </Link>
          </div>
        </div>
  )
}


export default AchievementCard;
