import { Routes, Route, Navigate } from "react-router-dom";
import LoginRoute from "./AuthRoutes";
import AppLayout from "../Layouts/AppLayouts";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../auth/Login";
import Approvals from "../pages/Approvals";
import Product from "../pages/Product";
import Invoice from "../pages/Invoice";
import DeliveryChalan from "../pages/DeliveryChalan";



function Dashboard() {
  return (
    <main className="grid min-h-[calc(100vh-7rem)] place-items-center text-slate-900">
      <section className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Order Management System
        </h1>
        <p className="mt-3 text-slate-600">You are signed in.</p>
      </section>
    </main>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        {title}
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-950">
        {title}
      </h1>
      <p className="mt-3 text-slate-600">This module is ready for content.</p>
    </main>
  );
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/forgot-password" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dealers" element={<PlaceholderPage title="Dealers" />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<PlaceholderPage title="Orders" />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/pending-orders" element={<PlaceholderPage title="Pending orders" />} />
          <Route path="/delivery-challan" element={<PlaceholderPage title="DeliveryChalan" />}/>
          
        </Route>
      </Route>


    </Routes>
  );
}

export default MainRoutes;
