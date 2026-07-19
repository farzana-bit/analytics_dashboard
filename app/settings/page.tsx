import { Save, Shield, Key, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-slate-400">Manage your account and developer configurations.</p>
      </div>

      {/* Profile Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-2">
          <Shield size={18} className="text-emerald-500" />
          General Profile
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Project Name</label>
            <input className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white" defaultValue="My SaaS Pro" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Support Email</label>
            <input className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white" defaultValue="support@mysaas.com" />
          </div>
        </div>
      </section>

      {/* API Keys Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-2">
          <Key size={18} className="text-emerald-500" />
          API Credentials
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Public Key</label>
            <code className="block w-full bg-black/40 border border-slate-800 rounded-lg p-3 text-emerald-500 text-sm overflow-x-auto">
              pk_test_51MzS2XSC0WfVp8YyV9r...
            </code>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-400">Secret Key</label>
            <div className="flex gap-2">
              <input 
                type="password" 
                readOnly 
                value="sk_test_51MzS2XSC0WfVp8YyV9r"
                className="flex-1 bg-black/40 border border-slate-800 rounded-lg p-3 text-slate-400 text-sm"
              />
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-colors">
                Reveal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-2">
          <Bell size={18} className="text-emerald-500" />
          Notifications
        </div>
        <div className="space-y-3">
          {[
            "Notify me on new subscription",
            "Daily revenue summaries",
            "Churn alerts (> 5%)"
          ].map((text) => (
            <label key={text} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-5 bg-slate-800 peer-checked:bg-emerald-600 rounded-full transition-colors" />
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors">{text}</span>
            </label>
          ))}
        </div>
      </section>

      <div className="pt-6 border-t border-slate-800 flex justify-end">
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold transition-all">
          <Save size={18} /> Save Settings
        </button>
      </div>
    </div>
  );
}