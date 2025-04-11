import { FC, useEffect, useRef, useState } from "react";
import useUser from "../hooks/useUser";
import { FaUserAlt as User, FaSearch as Search } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserInfo: FC = () => {
  const { user } = useUser();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user]);

  return (
    <div className="flex gap-6 xl:gap-10 items-center">
      <button className="cursor-pointer md:text-xl xl:text-2xl max-md:hidden">
        <Search />
      </button>

      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:text-lg"
        >
          <User />
        </button>

        {user && isOpen && (
          <div className="absolute top-10 -left-20 bg-white shadow-lg rounded-md z-[99]">
            <div className="header-button font-semibold">
              {user.firstName} {user.lastName}
            </div>
            {user.role === "admin" && (
              <Link to="/admin">
                <div className="header-button">Admin Panel</div>
              </Link>
            )}
            <div
              onClick={() => logout.mutate()}
              className="header-button cursor-pointer"
            >
              Logout
            </div>
          </div>
        )}
      </div>

      <button className="bg-my-yellow text-sm md:text-base xl:text-lg size-[20px] md:size-[24px] xl:size-[32px] rounded-full grid place-items-center">
        0
      </button>
    </div>
  );
};

export default UserInfo;
