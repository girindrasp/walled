import { useEffect, useState } from "react";
import nonFormal from "../assets/nonFormal.jpg";

function Avatar( { name }) {
    const [isAvatarActive, setIsAvatarActive] = useState(false)
    const [userName, setUserName] = useState("")

    return (
      <div className="flex items-center gap-x-4 ml-auto">
        <span className="text-right">
          <p className="text-black font-bold">{name}</p>
          <p className="text-black">Personal Account</p>
        </span>
        <div
          className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
            isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
          }`}
          onClick={() => setIsAvatarActive((prev) => !prev)}
        >
          <img src={nonFormal} alt="avatar" className="flex items-right rounded-full w-20 h-20 aspect-square object-cover hover:ring-8 hover:ring-blue-500 transition-all duration-300" />
        </div>
      </div>
    );
  }
  

export default Avatar;
