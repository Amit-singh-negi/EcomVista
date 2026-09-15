import { assets } from "../assets/assets";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <img
        src={assets.logo}
        alt="EcomVista Admin"
        className="w-60 h-auto object-contain"
      />

      <button onClick={()=> setToken('')} className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium transition">
        Logout
      </button>
    </div>
  );
};

export default Navbar;