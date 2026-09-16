import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] px-6 py-12 text-slate-950">
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <section className="relative w-full max-w-md overflow-hidden rounded-lg border border-white/70 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400" />

          <div className="mb-8 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-lg bg-slate-950 text-lg font-black text-white shadow-lg shadow-slate-950/20">
              GD
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Profile Box
              </p>
              <h1 className="text-3xl font-black text-slate-950">gomlu don is now updated Now am spiderman</h1>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Name
            </p>
            <p className="mt-2 text-4xl font-black leading-tight text-slate-950">
              gomlu don
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
