import { NavLink } from "react-router-dom";
import {
    FiClipboard,
    FiFileText,
    FiGrid,
    FiPackage,
    FiShield,
    FiTruck,
    FiUsers,
    FiTrendingUp,


} from "react-icons/fi";
import { LuHandshake } from "react-icons/lu";


const menus = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: FiGrid
    },
    {
        label: "Dealers",
        path: "/dealers",
        icon: FiUsers
    },
    {
        label: "Products",
        path: "/products",
        icon: FiPackage
    },
    {
        label: "Orders",
        path: "/orders",
        icon: FiClipboard
    },
    {
        label: "Approvals",
        path: "/approvals",
        icon: FiShield
    },
    {
        label: "Invoices",
        path: "/Invoice",
        icon: FiFileText
    },
    {
        label: "Pending orders",
        path: "/pending-orders",
        icon: FiClipboard
    },
    {
        label: "Delivery Challan",
        path:"/delivery-chalan",
        icon: FiTruck
    }
    
    


]
function Sidebar({ onSelectModule }) {
    return (
        <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
            {/* ============================= */}
            {/* MENU */}
            {/* ============================= */}
            <div className="flex-1 p-4">
                <section className="gap-6 flex h-full flex-col">
                    <div className="gap-10" >
                       <h1 className="text-xl font-bold text-slate-900">Plantpro Science</h1>
                       <p className="text-sm text-slate-400">Dealer Management System</p>
                    </div>
                    <div className="px-2 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Main Menu
                    </div>

                    <div className="space-y-1">
                        {menus.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className="no-underline"
                                    onClick={() =>
                                        onSelectModule?.(item.path)
                                    }
                                >
                                    {({ isActive }) => (
                                        <button
                                            type="button"
                                            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"
                                                }`}
                                        >
                                            <span className="text-base">
                                                <Icon aria-hidden="true" />
                                            </span>

                                            <span>{item.label}</span>
                                        </button>
                                    )}
                                </NavLink>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* ============================= */}
            {/* FOOTER */}
            {/* ============================= */}
            <div className="m-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 h-2 w-2 rounded-full bg-emerald-500" />

                <div>
                    <div className="text-sm font-semibold text-slate-900">
                        Plantpro Science
                    </div>

                    <div className="text-xs text-slate-500">
                        Static Sidebar Menu
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
