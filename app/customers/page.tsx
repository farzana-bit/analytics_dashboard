import { Search, Filter, MoreHorizontal, UserCheck } from "lucide-react";

const customers = [
  { id: "1", name: "Alex Rivera", email: "alex@example.com", plan: "Pro", status: "Active", spent: "$450" },
  { id: "2", name: "Sarah Chen", email: "sarah@techflow.io", plan: "Enterprise", status: "Active", spent: "$1,200" },
  { id: "3", name: "Jordan Smith", email: "j.smith@gmail.com", plan: "Starter", status: "Churned", spent: "$20" },
  { id: "4", name: "Mila Kunis", email: "mila@startup.co", plan: "Pro", status: "Active", spent: "$300" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Customers</h1>
          <p className="text-slate-400">Manage and segment your user base.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Export CSV
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            placeholder="Search by name or email..."
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Table */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Customer</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Plan</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase">Total Spent</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="p-4">
                  <div className="font-medium text-slate-200">{c.name}</div>
                  <div className="text-sm text-slate-500">{c.email}</div>
                </td>
                <td className="p-4">
                  <span className="text-sm px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">{c.plan}</span>
                </td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    c.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                  }`}>
                    {c.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-300 font-mono">{c.spent}</td>
                <td className="p-4 text-right">
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}