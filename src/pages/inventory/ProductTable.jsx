import { useState } from "react";
import ProductDetails from "./ProductDetails";

const products = [
  {
    name: "Agro-Shield Bio Booster",
    code: "PP-ABB-001",
    category: "BIO-STIMULANTS",
    unit: "500ml Bottle",
    rate: "1,240.00",
    stock: "450",
    status: "Active"
  },
  {
    name: "Nitromax Power Granules",
    code: "PP-NPG-242",
    category: "FERTILIZERS",
    unit: "25kg Bag",
    rate: "3,850.00",
    stock: "12",
    status: "Low Stock"
  },
  {
    name: "Root-Guard Fungicide",
    code: "PP-RGF-088",
    category: "PROTECTION",
    unit: "1kg Pouch",
    rate: "890.00",
    stock: "2,100",
    status: "Active"
  }
];

export default function ProductTable() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-300 overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="h-14 bg-[#eef3fb] border-b border-slate-300">
            <th className="w-[18%] px-6 text-left text-[12px] font-bold tracking-wider text-slate-500">
              PRODUCT NAME
            </th>
            <th className="w-[14%] px-6 text-left text-[12px] font-bold tracking-wider text-slate-500">
              PRODUCT CODE
            </th>
            <th className="w-[17%] px-6 text-left text-[12px] font-bold tracking-wider text-slate-500">
              CATEGORY
            </th>
            <th className="w-[12%] px-6 text-left text-[12px] font-bold tracking-wider text-slate-500">
              UNIT
            </th>
            <th className="w-[12%] px-6 text-right text-[12px] font-bold tracking-wider text-slate-500">
              RATE (&#8377;)
            </th>
            <th className="w-[14%] px-6 text-right text-[12px] font-bold tracking-wider text-slate-500">
              AVAILABLE STOCK
            </th>
            <th className="w-[13%] px-6 text-left text-[12px] font-bold tracking-wider text-slate-500">
              STATUS
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => {
            const isLowStock = item.status === "Low Stock";

            return (
              <tr
                key={item.code}
                className="h-[120px] border-b border-slate-200 last:border-b-0"
              >
                <td className="px-6 text-sm font-bold text-slate-900">
                  <span className="block max-w-[140px] leading-5">
                    <button
                      onClick={() => setShowDetails(true)}
                      className="">
                      {item.name}
                    </button>
                    {showDetails && (
                      <ProductDetails
                        onClose={() => setShowDetails(false)}
                      />
                    )}
                  </span>
                </td>

                <td className="px-6 text-sm text-slate-500 font-medium">
                  <span className="block max-w-[74px] leading-5">
                    {item.code}
                  </span>
                </td>

                <td className="px-6">
                  <span className="inline-flex items-center rounded bg-[#cfe0fa] px-2 py-[2px] text-[11px] font-bold leading-4 text-slate-600">
                    {item.category}
                  </span>
                </td>

                <td className="px-6 text-sm text-slate-900">
                  <span className="block max-w-[72px] leading-5">
                    {item.unit}
                  </span>
                </td>

                <td className="px-6 text-right text-[15px] font-bold text-slate-900">
                  {item.rate}
                </td>

                <td
                  className={`px-6 text-right text-[15px] font-bold ${isLowStock ? "text-red-600" : "text-slate-900"
                    }`}
                >
                  {item.stock}
                </td>

                <td className="px-6">
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-bold leading-4 ${isLowStock ? "text-red-600" : "text-emerald-700"
                      }`}
                  >
                    <span
                      className={`h-[5px] w-[5px] rounded-full ${isLowStock ? "bg-red-600" : "bg-emerald-700"
                        }`}
                    ></span>
                    <span className={isLowStock ? "max-w-[44px]" : ""}>
                      {item.status}
                    </span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}