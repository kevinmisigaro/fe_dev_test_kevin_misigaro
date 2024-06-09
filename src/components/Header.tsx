import { MyUserProfileContext } from "@/utils/states/MyUserProfileContext";
import { useContext } from "react";

function Header() {
  const personalProfile = useContext(MyUserProfileContext);

  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl text-white">Posts App</a>
      </div>
      <div className="flex-none gap-2">
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
