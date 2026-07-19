import MetricsGrid from "@/components/MetricsGrid";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import { TrendingUp } from "lucide-react";

// Mock data fetching function representing a DB call
async function getAnalyticsData() {
  // Simulate DB delay
  // const data = await db.subscriptions.findMany()...
  return {
    mrr: 12450,
    mrrGrowth: 12.5,
    churn: 2.4,
    churnTrend: -0.5,
    ltv: 840,
    ltvGrowth: 5.2,
    activeUsers: 1240,
    userGrowth: 8.1,
  };
}

export default async function Dashboard() {
  const stats = await getAnalyticsData();

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-emerald-500 font-medium">
          <TrendingUp size={20} />
          <span className="text-sm">Live Updates</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
        <p className="text-slate-400">Welcome back. Here is what is happening with your SaaS today.</p>
      </header>

      {/* Stats Cards */}
      <MetricsGrid stats={stats} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AnalyticsCharts />
      </div>
    </div>
  );
}