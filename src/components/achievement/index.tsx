import * as React from "react";
import { Link } from "react-router-dom";
import {AchievementType} from "../../types"
import { ThemeContext } from "../../ThemeContext";


type Props = {
  key: number
  achievement: AchievementType
}

const AchievementCard = ({key, achievement}: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
      <div key={key} className="border border-gray-100 w-auto text-center rounded-lg py-4 px-4 my-6 shadow-lg hover:shadow-xl cursor-pointer">
          <img src="/united-kingdom.png" alt="achievement1" className="w-12 mx-auto" />
          <p className="font-normal text-lg my-2 text-[#1DA1F2]">
            {achievement.title}
          </p>
          <p className={theme === "dark" ? "my-4 text-white font-thin" : "my-4 text-gray-500 font-thin"}>
            {achievement.subtitle}
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link
              to=""
              className={theme === "dark" ? "border-2 border-[#1DA1F2] text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
            >
              Certification
            </Link>
            <Link
              to=""
              className={theme === "dark" ? "border-2 border-[#1DA1F2] text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
            >
              Award Letter
            </Link>
          </div>
        </div>
  )
}


export default AchievementCard;
