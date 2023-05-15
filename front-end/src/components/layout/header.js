import { HeaderButton } from "../common/buttons";
import open1 from "../../assets/images/openinventor.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); // add state variable to track whether the dropdown is visible

  return (
    <div className="flex sticky top-0 z-50 bg-blue-100">
      <img className="h-20 p-1 ml-5" src={open1} alt="logo" />
      <div className="absolute right-0 flex justify-between">
        <Link to={`../reviewerHome`}>
          <HeaderButton pathname="/home">Home</HeaderButton>
        </Link>       
        <HeaderButton pathname="/about">About</HeaderButton>
        <Link to={`../signin`}>
          <HeaderButton pathname="/login">Login</HeaderButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
