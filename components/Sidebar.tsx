import { LayoutDashboard, Users, CreditCard, Settings, LogOut, Zap } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: CreditCard, label: "Subscriptions", href: "/billing" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-slate-900 border-r border-slate-800 fixed h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-emerald-500 p-1.5 rounded-lg">
          <Zap size={20} className="text-white fill-current" />
        </div>
        <span className="text-xl font-bold tracking-tight">SaaSMetrics</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-rose-400 transition-colors w-full">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}