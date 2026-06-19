function AppShell({ sidebar, topbar, children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        {sidebar}

        <div className="flex min-w-0 flex-1 flex-col">
          {topbar}

          <div className="flex-1 p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppShell;
