import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { makeRequest } from "../api/httpClient";
import { toast } from "react-toastify";

function VerificationPage(props) {
  const {
    formData = {},
    onChange,
    onBack,
    onSubmit,
    errors = {},
    setErrors,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleResendOtp = async () => {
    try {
      const res = await makeRequest("forgotPassword", {
        method: "POST",
        body: { email: formData.email },
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success("New OTP sent");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit || ((e) => e.preventDefault())} className="space-y-5">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Reset password
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter the OTP and choose a new password for your account.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">OTP</label>
        <input
          type="text"
          name="code"
          required
          placeholder="Enter OTP"
          value={formData.code || ""}
          onChange={(e) => {
            onChange && onChange(e);
            setErrors && setErrors({ ...errors, code: "" });
          }}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
        {errors.code && (
          <p className="mt-1 text-sm text-red-500">{errors.code}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          New password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Enter new password"
            value={formData.password || ""}
            onChange={(e) => {
              onChange && onChange(e);
              setErrors && setErrors({ ...errors, password: "" });
            }}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Re-enter password"
          value={formData.confirmPassword || ""}
          onChange={(e) => {
            onChange && onChange(e);
            setErrors && setErrors({ ...errors, confirmPassword: "" });
          }}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        Submit
      </button>

      <button
        type="button"
        onClick={handleResendOtp}
        className="w-full text-sm font-medium text-blue-600 transition hover:text-blue-700"
      >
        Resend OTP
      </button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => onBack && onBack()}
          className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          Back to Login
        </button>
      </div>
    </form>
  );
}

export default VerificationPage;
