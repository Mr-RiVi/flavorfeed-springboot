import { HeaderButton } from "../common/buttons";
import logo from "../../assets/images/flavorfeed.png";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex sticky top-0 z-50 bg-blue-100">
      <img className="h-16 p-2 ml-5" src={logo} alt="logo" />
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
