const Footer = () => {
  return (
    <footer className="bg-amazonclone text-white">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">About Amazon</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Amazon Devices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Sell products on Amazon</a></li>
              <li><a href="#" className="hover:underline">Sell on Amazon Business</a></li>
              <li><a href="#" className="hover:underline">Sell apps on Amazon</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Amazon Payment Products</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Amazon Business Card</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#" className="hover:underline">Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Amazon and COVID-19</a></li>
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#" className="hover:underline">Manage Your Content and Devices</a></li>
              <li><a href="#" className="hover:underline">Amazon Assistant</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <img
              className="h-[35px] w-[100px]"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
            <select className="bg-gray-700 text-white p-1 rounded">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <select className="bg-gray-700 text-white p-1 rounded">
              <option>$ USD - U.S. Dollar</option>
              <option>€ EUR - Euro</option>
              <option>£ GBP - British Pound</option>
            </select>
          </div>
          <div className="text-sm">
            <div className="mb-2">
              <a href="#" className="hover:underline">Australia</a> |
              <a href="#" className="hover:underline">Brazil</a> |
              <a href="#" className="hover:underline">Canada</a> |
              <a href="#" className="hover:underline">China</a> |
              <a href="#" className="hover:underline">France</a> |
              <a href="#" className="hover:underline">Germany</a> |
              <a href="#" className="hover:underline">Italy</a> |
              <a href="#" className="hover:underline">Japan</a> |
              <a href="#" className="hover:underline">Mexico</a> |
              <a href="#" className="hover:underline">Netherlands</a> |
              <a href="#" className="hover:underline">Poland</a> |
              <a href="#" className="hover:underline">Singapore</a> |
              <a href="#" className="hover:underline">Spain</a> |
              <a href="#" className="hover:underline">Turkey</a> |
              <a href="#" className="hover:underline">United Arab Emirates</a> |
              <a href="#" className="hover:underline">United Kingdom</a> |
              <a href="#" className="hover:underline">United States</a>
            </div>
            <div>
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
