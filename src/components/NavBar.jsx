import { ShoppingCartIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="w-full">
      <div className="flex bg-amazonclone text-white h-[60px] px-4">
        {/* Left */}
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United Kingdom</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center">
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex items-center pr-4 pl-4">
            <GlobeAltIcon className="h-6 w-6 mr-1" />
            <select className="bg-transparent text-white text-sm border-none outline-none">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 overflow-x-auto">
        <div className="whitespace-nowrap">Today's Deals</div>
        <div className="whitespace-nowrap">Customer Service</div>
        <div className="whitespace-nowrap">Registry</div>
        <div className="whitespace-nowrap">Gift Cards</div>
        <div className="whitespace-nowrap">Sell</div>
        <div className="whitespace-nowrap">Amazon Basics</div>
        <div className="whitespace-nowrap">New Releases</div>
        <div className="whitespace-nowrap">Best Sellers</div>
      </div>
    </header>
  );
};

export default NavBar;
