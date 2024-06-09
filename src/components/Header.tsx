import { MyUserProfileContext } from "@/utils/states/MyUserProfileContext";
import Link from "next/link";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa";

function Header() {
  const personalProfile = useContext(MyUserProfileContext);

  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl text-white">
          Posts App
        </a>
      </div>
      <div className="flex-none gap-2">
        <Link href={"/favorites"}>
          <FaHeart className="text-2xl text-red-600 cursor-pointer mr-5" />
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={personalProfile?.personalProfile?.imageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
