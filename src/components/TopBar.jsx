import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaSearch } from "react-icons/fa";



function TopBar({ onLogout }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="relative  ">
        {/* <input className="border border-slate-200 rounded-lg py-1 px-67 focus:outline-none focus:ring-2 focus:ring-blue-300 text-left " type="text" /> */}
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400   " />
        <input
          className="border border-slate-200 rounded-lg py-1 px-10 focus:outline-none focus:ring-2 focus:ring-blue-300 text-left w-170 "
          type="text" 
          placeholder="Search..."
        />
      </div>
      <div>
        <button className="relative inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          <IoIosNotificationsOutline className="text-xl text-slate-500" />
        </button>
      </div>
      <div>
        <button className="relative inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          <GoQuestion className="text-xl text-slate-500" />
        </button>
      </div>
<div>

      <button
        type="button"
        onClick={onLogout}
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <FiLogOut aria-hidden="true" />
        Logout
      </button>
</div>
    </header>
  );
}

export default TopBar;
