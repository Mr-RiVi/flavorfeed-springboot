import { HeaderButton } from '../common/buttons'
import open1 from "../../assets/images/openinventor.png"

const Header = () => {
  return (
    <div className="flex sticky top-0 z-50 bg-blue-100">
    <img className='h-20 p-1 ml-5' src={open1} alt="logo" />
      <div className="absolute right-0 flex justify-between">
        <HeaderButton pathname="/home">Home</HeaderButton>
        <HeaderButton pathname="/dropdown">Drop Down ^</HeaderButton>
        <HeaderButton pathname="/about">About</HeaderButton>
        <HeaderButton pathname="/login">Login</HeaderButton>
      </div>
    </div>
  )
}

export default Header
