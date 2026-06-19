import AuthShell from "./AuthShell";

function LoginPage({
  formData,
  error,
  helperText,
  onChange,
  onSubmit,
  onForgotPassword,
}) {
  return (
    <AuthShell
      title="Login to CRM"
      subtitle="Sign in to continue to your workspace and module dashboard."
      footer={
        <div className="text-sm text-slate-500">
          <span>Demo login:</span>
          <strong className="ml-1 font-semibold text-slate-700">
            admin@crm.local / Admin@123
          </strong>
        </div>
      }
    >
      <form className="space-y-5" onSubmit={onSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
          <input
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter your email"
            autoComplete="off"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
          <input
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Enter your password"
            autoComplete="off"
          />
        </label>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        ) : null}
        {helperText ? (
          <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {helperText}
          </div>
        ) : null}

        <div className="space-y-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
            onClick={onForgotPassword}
          >
            Forgot Password
          </button>
        </div>
      </form>
    </AuthShell>
  );
}

export default LoginPage;
