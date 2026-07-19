import { CreditCard, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Subscriptions</h1>
        <p className="text-slate-400">Manage plans and view your billing performance.</p>
      </div>

      {/* Plan Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Starter", price: "$19", count: 142, color: "blue" },
          { label: "Pro", price: "$49", count: 84, color: "emerald" },
          { label: "Enterprise", price: "$199", count: 12, color: "violet" },
        ].map((plan) => (
          <div key={plan.label} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${plan.color}-500/10 blur-3xl`} />
            <h3 className="text-lg font-semibold text-slate-200">{plan.label}</h3>
            <p className="text-3xl font-bold mt-2 text-white">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
            <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm font-medium">
              <CheckCircle2 size={16} />
              {plan.count} active subscribers
            </div>
          </div>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Invoices</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                  <CreditCard size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Invoice #INV-00{i}</div>
                  <div className="text-xs text-slate-500">Paid Oct {10 + i}, 2023</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-mono text-slate-300">$49.00</span>
                <button className="text-emerald-500 hover:text-emerald-400 text-sm font-medium">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}