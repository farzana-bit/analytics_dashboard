"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";

const mrrData = [
  { name: "Jan", total: 4000 },
  { name: "Feb", total: 5200 },
  { name: "Mar", total: 6800 },
  { name: "Apr", total: 8500 },
  { name: "May", total: 9200 },
  { name: "Jun", total: 12450 },
];

const trafficData = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 200 },
  { name: "Thu", users: 450 },
  { name: "Fri", users: 380 },
  { name: "Sat", users: 150 },
  { name: "Sun", users: 110 },
];

export default function AnalyticsCharts() {
  return (
    <>
      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-6">MRR Growth (6 Months)</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mrrData}>
              <defs>
                <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b" }}
                itemStyle={{ color: "#10b981" }}
              />
              <Area type="monotone" dataKey="total" stroke="#10b981" fillOpacity={1} fill="url(#colorMrr)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-6">Daily Active Traffic</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: '#1e293b'}}
                contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b" }}
              />
              <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}