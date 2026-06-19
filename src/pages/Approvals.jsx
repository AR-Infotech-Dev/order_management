import { FiCheck, FiClock, FiEye, FiX, FiHexagon, FiTrendingUp } from "react-icons/fi";

const approvalStats = [
  { label: "Pending", value: "12", tone: "text-amber-700 bg-amber-50", icon: FiClock, icon1: FiTrendingUp },
  { label: "Approved", value: "48", tone: "text-emerald-700 bg-emerald-50", icon: FiCheck, icon1: FiHexagon },
  { label: "Rejected", value: "03", tone: "text-rose-700 bg-rose-50", icon: FiX, icon1: FiHexagon },
];

const approvalRequests = [
  {
    id: "APR-1001",
    dealer: "Shree Motors",
    salesman: "amit kumar",
    amount: "₹42,500",
    DATE: "2024-06-15",
    status: "Pending"
  },
  {
    id: "APR-1002",
    dealer: "Metro Distributors",
    salesman: "rajesh sharma",
    amount: "₹18,900",
    DATE: "2024-06-16",
    status: "Pending"
  },
  {
    id: "APR-1003",
    dealer: "Prime Auto Hub",
    salesman: "priya verma",
    amount: "₹76,300",
    DATE: "2024-06-17",
    status: "Pending"
  },
  {
    id: "APR-1004",
    dealer: "Global Traders",
    salesman: "vikram singh",
    amount: "₹55,000",
    DATE: "2024-06-18",
    status: "Pending"
  },
  {
    id: "APR-1005",
    dealer: "vikram Traders",
    salesman: "vikram shah",
    amount: "₹65,000",
    DATE: "2024-06-18",
    status: "Pending"
  }
];

function Approvals() {
  return (
    <main className="space-y-6">
      <section className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">
            Approval Workflow
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Review and manage pending dealer orders and administrative requests.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md border border-black px-4 py-2 text-sm font-semibold text-black"
          >
            Filter
          </button>

          <button
            type="button"
            className="rounded-md border border-black px-4 py-2 text-sm font-semibold text-black"
          >
            Export
          </button>
        </div>

      </section>


      <section className="h-50 p-2 grid gap-4 md:grid-cols-3">
        {approvalStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-40">
              <stat.icon className={`w-5 h-5 ${stat.tone}`} aria-hidden="true" />
              <span className={`rounded-full px-3 py-1 mb-1  text-xs font-semibold ${stat.tone}`}>
                Requests
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
            </div>
            <div className="flex items-center gap-2  ">
              <p className="mt-7 ">{stat.icon1 && <stat.icon1 className={`w-5 h-5 ${stat.tone}`} aria-hidden="true" />}</p>
              <p className="text-sm font-medium text-blue-500">
                +since last yesterday
              </p>
            </div>

          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex gap-10 border-b border-slate-200 px-5 py-4">
          <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
            ALL REQUESTS
          </button>
          <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
            CREDIT LIMIT
          </button>
          <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
            BULK DISCOUNT
          </button>
        </div>
        {/* <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-slate-950">
              Approval Queue
            </h2>
            <p className="text-sm text-slate-500">
              Latest requests waiting for manager action.
            </p>
          </div>
          <FiClock className="text-xl text-slate-400" aria-hidden="true" />
        </div> */}

        <div className="max-h-[400px] overflow-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">ORDER NUMBER</th>
                <th className="px-5 py-3">DEALER</th>
                <th className="px-5 py-3">SALSMAN</th>
                <th className="px-5 py-3">AMOUNT</th>
                <th className="px-5 py-3">DATE</th>
                <th className="px-5 py-3">STATUS</th>
                <th className="px-5 py-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {approvalRequests.map((request) => (
                <tr key={request.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold text-slate-950">
                    {request.id}
                  </td>
                  <td className="px-5 py-4 text-slate-700">{request.dealer}</td>
                  <td className="px-5 py-4 text-slate-700">{request.salesman}</td>
                  <td className="px-5 py-4 font-medium text-slate-950">
                    {request.amount}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {request.DATE}
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {request.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100"
                        aria-label={`View ${request.id}`}
                      >
                        <FiEye aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        className="rounded-md border border-green-200 p-2 text-green-700 transition hover:bg-green-500"
                        aria-label={`Reject ${request.id}`}
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-rose-200 p-2 text-rose-700 transition hover:bg-rose-50"
                        aria-label={`Reject ${request.id}`}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Approvals;
