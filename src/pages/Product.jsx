import { Filter, RefreshCcw } from "lucide-react";
import ProductTable from "./inventory/ProductTable";
import StatsCards from "./inventory/StatsCards";

export default function Products() {
  return (
    <div className="flex min-h-screen bg-[#f6f7fb] text-slate-950">
      

      <div className="flex-1 min-w-0">
       

        <main className="p-2">
          <div className="flex items-start justify-between gap-4 mb-[22px]">
            <div>
              <h1 className="text-[22px] leading-7 font-bold">
                Product Inventory
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage and monitor your catalog across all categories.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="h-9 min-w-[147px] border border-slate-300 bg-white px-4 rounded flex items-center justify-center gap-2 text-sm text-slate-700 shadow-sm">
                <Filter size={16} />
                Filter Category
              </button>

              <button className="h-9 min-w-[147px] bg-emerald-700 text-white px-4 rounded flex items-center justify-center gap-2 text-sm font-medium shadow-sm">
                <RefreshCcw size={15} />
                Sync from Tally
              </button>
            </div>
          </div>

          <StatsCards />

          <div className="mt-6">
            <ProductTable />
          </div>
        </main>
      </div>
    </div>
  );
}