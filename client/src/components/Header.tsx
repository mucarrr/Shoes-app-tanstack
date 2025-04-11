import { FC } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import UserInfo from "./User-info";

const Header: FC = () => {
  return (
    <header className="bg-white grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-[16px] md:rounded-[24px] xl:rounded-[32px] mb-[24px] md:mb-[28px] xl:mb-[32px]">
      <button className="md:hidden cursor-pointer text-xl">
        <GiHamburgerMenu />
      </button>

      <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold">
        <Link to="/" className="text-nowrap">
          New Arrivals 🔥
        </Link>
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
      </nav>

      <Link to="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" />
      </Link>

      <div className="flex justify-end items-center">
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;