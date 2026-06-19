import { BiExport } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Resendrequests = [
    {
        id: "INV-1001",
        dealer: "Shree Motors",
        orderno: "ORD-1001",
        Date: "14-06-2026",
        invoiceAmount: "₹42,500",
        RecQTY: "MACTCHED",
        approuval: "PENDING",
        Icon: <FiEye />
    },
    {
        id: "INV-1002",
        dealer: "Metro Distributors",
        orderno: "ORD-1002",
        Date: "15-06-2026",
        invoiceAmount: "₹35,000",
        RecQTY: "PENDING",
        approuval: "PENDING",
        Icon: <FiEye />
    },
    {
        id: "INV-1003",
        dealer: "Prime Auto Hub",
        orderno: "ORD-1003",
        Date: "16-06-2026",
        invoiceAmount: "₹50,000",
        RecQTY: "PENDING",
        approuval: "PENDING",
        Icon: <FiEye />
    },
    {
        id: "INV-1004",
        dealer: "Global Traders",
        orderno: "ORD-1004",
        Date: "17-06-2026",
        invoiceAmount: "₹45,000",
        RecQTY: "PENDING",
        approuval: "PENDING",
        Icon: <FiEye />
    },
    {
        id: "INV-1005",
        dealer: "Shree Motors",
        orderno: "ORD-1005",
        Date: "18-06-2026",
        invoiceAmount: "₹40,000",
        RecQTY: "PENDING",
        approuval: "PENDING",
        Icon: <FiEye />
    },
    {
        id: "INV-1006",
        dealer: "Metro Distributors",
        orderno: "ORD-1006",
        Date: "19-06-2026",
        invoiceAmount: "₹35,000",
        RecQTY: "PENDING",
        approuval: "PENDING",
        Icon: <FiEye />
    }
]


const Invoice = () => {
    const [showPopup, setShowPopup] = useState(false);



    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-4 gap-4">
                <div>

                    <h1 className="text-2xl font-bold">Invoice management</h1>
                    <p className="text-slate-600">
                        Review, manage and track dealer billing and acknowledgments.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button type="button" className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600">
                        <BiExport className="inline mr-2" />
                        Export Invoices
                    </button>
                    <button type="button" className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600">
                        <IoIosAdd className="inline mr-2" />
                        create new invoice
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 shadow-sm rounded-md border border-slate-200 bg-white mt-5">
                <div className="border-r border-slate-200 px-6 gap-4 text-base">
                    <p className="text-slate-500">TOTAL OUTSTANDING </p>
                    <h1>0.00</h1>
                </div>
                <div className="lg:border-r border-slate-200 px-4 gap-4">
                    <p className="text-slate-500">PENDING APPROVALS </p>
                    <h1>0.00</h1>
                </div>
                <div className=" gap-4">
                    <p className="text-slate-500">DUE TO 30 DAYS </p>
                    <h1>0.00</h1>
                </div>
                <div className="flex border border-slate-200  gap-2 bg-slate-100 h-10 w-40 align-center justify-center rounded-md mt-5 ">
                    <button className="p-2 px-4 hover:bg-white-200 text-sm border-r border-slate-200">VIEW</button>
                    <button className="p-2 px-4 hover:bg-white-200 text-sm">MONTHLY</button>
                </div>
            </div>
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm mt-10">
                {/* <div className="flex gap-10 border-b border-slate-200 px-5 py-4">
                        <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
                            ALL REQUESTS
                        </button>
                        <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
                            CREDIT LIMIT
                        </button>
                        <button className="text-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-md">
                            BULK DISCOUNT
                        </button>
                        </div> */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">

                    {/* Left Side */}
                    <h2 className="text-lg font-bold">
                        Recent Invoices
                    </h2>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <p className="text-sm text-slate-600">
                            Filter By:
                        </p>

                        <select className="border border-slate-300 rounded-md px-3 py-1 focus:outline-none">
                            <option value="">All</option>
                            <option value="pending">Pending</option>
                            <option value="paid">Paid</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

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
                                <th className="px-5 py-3">INVOICE NO</th>
                                <th className="px-5 py-3">DEALER NAME</th>
                                <th className="px-5 py-3">ORDER NO</th>
                                <th className="px-5 py-3">INVOICE DATE</th>
                                <th className="px-5 py-3">INVOICE AMOUNT</th>
                                <th className="px-5 py-3">REC. QTY STATUS</th>
                                <th className="px-5 py-3 text-right">DEALER APPROVAL</th>
                                <th className="px-5 py-3 text-right">Action</th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 ">
                            {Resendrequests.map((request) => (
                                <tr key={request.id} className="hover:bg-slate-50">
                                    <td className="px-5 py-4 font-semibold text-slate-950">
                                        {request.id}
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">{request.dealer}</td>
                                    <td className="px-5 py-4 text-slate-700">{request.orderno}</td>
                                    <td className="px-5 py-4 font-medium text-slate-950">
                                        {request.Date}
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">
                                        {request.invoiceAmount}
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                                            {request.RecQTY}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex justify-end gap-2">
                                            {request.approuval}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="p-5">
                                            <button
                                                onClick={() => setShowPopup(true)}
                                                className="p-2 border rounded hover:bg-gray-100"
                                            >
                                                <FiEye size={18} />
                                            </button>

                                            {/* Popup */}
                                            {showPopup && (
                                                <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">

                                                    <div className="bg-white w-[95%] sm:w-[500px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-lg shadow-lg">

                                                        <div className="flex justify-between items-center mb-4 border-b border-slate-200 p-2">
                                                            <div>

                                                                <h2 className="text-xl font-semibold ">
                                                                    Invoice Details
                                                                </h2>
                                                                <p>{request.id}</p>
                                                            </div>
                                                            <div>

                                                                <button
                                                                    onClick={() => setShowPopup(false)}
                                                                    className="text-xl font-bold"
                                                                >
                                                                    ✕
                                                                </button>
                                                            </div>


                                                        </div>
                                                        <div className="flex flex-col sm:flex-row justify-between gap-4 border border-slate-300 bg-slate-200 rounded-lg p-3">
                                                            <div className="flex flex-col gap-2">
                                                                <h2>STATUS</h2>
                                                                <h2 className="border border-red-500 bg-red-200 rounded-lg px-3 py-1 text-xs font-semibold text-red-700 text-center">
                                                                    OVERDUE & LOCKED
                                                                </h2>
                                                            </div>
                                                            <div className="flex flex-col  gap-2">

                                                                <h2>DUE DATE</h2>
                                                                <h2>14 Nov 2026</h2>
                                                            </div>

                                                        </div>
                                                        <div className="p-3 w-full">
                                                            <p className="text-base">ITEMIZED LIST</p>
                                                        </div>
                                                        <div>

                                                            <div className="flex justify-between items-start border-b p-2">

                                                                <div>
                                                                    <p className="text-base font-medium">
                                                                        PlantPro Growth Serum (5L)
                                                                    </p>

                                                                    <p className="text-sm text-gray-500">
                                                                        SKU: PP-SR-05-23
                                                                    </p>
                                                                </div>

                                                                <p className="font-semibold">
                                                                    {request.invoiceAmount}
                                                                </p>

                                                            </div>

                                                            <div className="flex justify-between items-start border-b p-2">

                                                                <div>
                                                                    <p className="text-base font-medium">
                                                                        Soil Nutri-Boost Catalyst
                                                                    </p>

                                                                    <p className="text-sm text-gray-500">
                                                                        SKU: PP-SN-99-01
                                                                    </p>
                                                                </div>

                                                                <p className="font-semibold">
                                                                    {request.invoiceAmount}
                                                                </p>

                                                            </div>
                                                            <div className="flex justify-between items-start border-b p-2">

                                                                <div>
                                                                    <p className="text-base font-medium">
                                                                        Subtotal
                                                                    </p>
                                                                    <p className="text-base font-medium">
                                                                        Tax (GST 18%)
                                                                    </p>

                                                                    
                                                                </div>

                                                                <p className="font-semibold ">
                                                                    {request.invoiceAmount} <br />
                                                                    
                                                                </p>

                                                            </div>

                                                        </div>
                                                        <div className="text-xl flex justify-between">
                                                            <div className=" font-semibold">
                                                            <h1>Total Payable</h1>
                                                            </div>
                                                            <div>
                                                               {request.invoiceAmount}
                                                            </div>
                                                        </div>


                                                        <div className="mt-5 flex justify-between ">

                                                            <button
                                                                onClick={() => setShowPopup(false)}
                                                                className="bg-black text-white px-4 py-2 w-50 "
                                                            >
                                                                Send Reminder 
                                                            </button>
                                                            <button
                                                                onClick={() => setShowPopup(false)}
                                                                className="border text-black px-4 py-2 w-50"
                                                            >
                                                                Download PDF
                                                            </button>
                                                            

                                                        </div>

                                                    </div>

                                                </div>
                                            )}

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section >
        </>
    );
};

export default Invoice;