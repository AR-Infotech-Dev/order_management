import { ChartNoAxesColumnIncreasing, CircleCheck, ClipboardList, TriangleAlert } from "lucide-react";

const cards = [
  {
    title: "TOTAL PRODUCTS",
    value: "1,284",
    icon: ClipboardList,
    iconBox: "bg-[#dbe5ff] text-slate-950"
  },
  {
    title: "IN STOCK",
    value: "1,150",
    icon: CircleCheck,
    iconBox: "bg-emerald-300 text-emerald-950"
  },
  {
    title: "LOW STOCK",
    value: "124",
    icon: TriangleAlert,
    iconBox: "bg-red-100 text-red-700"
  },
  {
    title: "NEW THIS MONTH",
    value: "12",
    icon: ChartNoAxesColumnIncreasing,
    iconBox: "bg-[#dbe5ff] text-slate-950"
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="h-[78px] bg-white border border-slate-300 rounded-lg px-4 flex items-center gap-4"
          >
            <div className={`h-10 w-10 rounded grid place-items-center ${card.iconBox}`}>
              <Icon size={22} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-[11px] text-slate-500 font-bold tracking-wider">
                {card.title}
              </p>
              <h2 className="text-[21px] leading-7 font-bold text-slate-950">
                {card.value}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}