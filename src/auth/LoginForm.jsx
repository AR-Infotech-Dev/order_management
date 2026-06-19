import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { makeRequest } from "../api/httpClient";
import { saveAuthSession } from "./authStorage";
import { useAuth } from "./authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from '../components/ui/Spinner';

const DEMO_CREDENTIALS = {
  username: "admin@crm.local",
  password: "Admin@123",
};

function LoginForm({ onForgot }) {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const isDemoLogin =
      form.username.trim().toLowerCase() === DEMO_CREDENTIALS.username &&
      form.password === DEMO_CREDENTIALS.password;

    try {
      setLoading(true);

      if (isDemoLogin) {
        const session = {
          token: "demo-token",
          authid: "demo-admin",
          user: {
            adminID: "demo-admin",
            name: "Demo Admin",
            email: DEMO_CREDENTIALS.username,
          },
        };

        saveAuthSession(session);
        login(session);
        toast.success("Demo login success");
        navigate("/dashboard");
        return;
      }

      const res = await makeRequest("login", {
        method: "POST",
        body: form
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      const session = {
        token: res?.token,
        user: res?.user,
        authid: res?.user.adminID
      };

      saveAuthSession(session);
      login(session);
      toast.success("Login success");
      navigate("/users");

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
        <input
          type="text"
          name="username"
          placeholder="Username/Email/Mobile No."
          value={form.username}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
        <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
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
      </div>

      <div className="flex items-center justify-between gap-4 text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" className="size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          Remember Me
        </label>

        <button
          type="button"
          onClick={onForgot}
          className="font-medium text-blue-600 transition hover:text-blue-700"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={loading}
      >
        {loading ? <Spinner /> : "Sign In"}
      </button>

      <p className="rounded-lg bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
        Demo login: <span className="font-semibold text-slate-700">admin@crm.local</span> /{" "}
        <span className="font-semibold text-slate-700">Admin@123</span>
      </p>

    </form>
  );
}

export default LoginForm;
