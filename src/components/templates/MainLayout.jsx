import { Navbar } from '../organisms/Navbar';

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white py-5 text-center text-xs text-slate-500">
        Horizonte Viajes · Integración Frontend con REST & GraphQL (MSW + Apollo Client)
      </footer>
    </div>
  );
}
