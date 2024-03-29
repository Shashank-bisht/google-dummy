import { TbGridDots } from "react-icons/tb";

import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.08]">
        <TbGridDots size={20} color="#5F6368" />
      </span>
      <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} alt="" />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="https://xsgames.co/randomusers/assets/avatars/female/1.jpg" alt="" />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
