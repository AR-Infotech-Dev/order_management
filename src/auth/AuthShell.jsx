function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-100 px-4 py-10 text-slate-900">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl" />

      <section className="relative w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-300/70">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25">
            CRM
          </span>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Workspace Access
            </span>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
              {title}
            </h1>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>

        <div>{children}</div>
        {footer ? <div className="mt-6 border-t border-slate-100 pt-5">{footer}</div> : null}
      </section>
    </div>
  );
}

export default AuthShell;
