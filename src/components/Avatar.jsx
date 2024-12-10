import { useState } from "react";
import nonFormal from "../assets/nonFormal.jpg";

// function Avatar() {
//   const [isAvatarActive, setIsAvatarActive] = useState(false);

//   <div className="flex justify-between py-4 px-8">
//     <div>
//       <h1 className="font-bold">Good Morning, Mas Pras</h1>
//       <p className="pl-2 px-10">
//         Check all your incoming and outgoing transactions here
//       </p>
//     </div>

//     <div className="flex items-center gap-6">
//       <div>
//         <h2 className="font-bold">Girindra Syukran Prahasto</h2>
//         <p>Personal Account</p>
//       </div>
//       <div>
//         <img
//           src={nonFormal}
//           className="flex items-right rounded-full w-20 h-20 aspect-square object-cover hover:ring-8 hover:ring-blue-500 transition-all duration-300"
//         />
//       </div>
//     </div>
//   </div>;
// }

function Avatar() {
    const [isAvatarActive, setIsAvatarActive] = useState(false);
  
    return (
      <div className="flex items-center gap-x-4 ml-auto">
        <span className="text-right">
          <p className="text-black font-bold">Girindra Syukran Prahasto</p>
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