import { ArrowUpRight, ArrowDownRight, DollarSign, Users, RefreshCw, BarChart3 } from "lucide-react";

interface MetricsProps {
  stats: {
    mrr: number;
    mrrGrowth: number;
    churn: number;
    churnTrend: number;
    ltv: number;
    ltvGrowth: number;
    activeUsers: number;
    userGrowth: number;
  };
}

export default function MetricsGrid({ stats }: MetricsProps) {
  const items = [
    { label: "MRR", value: `$${stats.mrr.toLocaleString()}`, trend: stats.mrrGrowth, icon: DollarSign },
    { label: "Active Users", value: stats.activeUsers.toLocaleString(), trend: stats.userGrowth, icon: Users },
    { label: "Churn Rate", value: `${stats.churn}%`, trend: stats.churnTrend, icon: RefreshCw, inverse: true },
    { label: "LTV", value: `$${stats.ltv}`, trend: stats.ltvGrowth, icon: BarChart3 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const isPositive = item.trend > 0;
        const isGood = item.inverse ? !isPositive : isPositive;

        return (
          <div key={item.label} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-800 rounded-lg text-slate-300">
                <item.icon size={20} />
              </div>
              <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                isGood ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
              }`}>
                {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {Math.abs(item.trend)}%
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium">{item.label}</p>
              <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}