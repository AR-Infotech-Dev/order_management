import { useState } from "react";
import { toast } from "react-toastify";
import { makeRequest } from "../api/httpClient";
import Spinner from '../components/ui/Spinner';


function ForgotPasswordForm({ onBack, onOtpSent }) {
  const [form, setForm] = useState({
    email: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await makeRequest("forgotPassword", {
        method: "POST",
        body: form
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success("OTP sent");
      onOtpSent(form.email);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleForgotPassword} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={loading}
      >
        {loading ? <Spinner /> : "Send OTP"}
      </button>
      <button
        type="button"
        onClick={onBack}
        className="w-full text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        Back to Login
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
