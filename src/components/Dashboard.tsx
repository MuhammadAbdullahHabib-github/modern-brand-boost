
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const revenueData = [
  { month: 'Jan', revenue: 4200, target: 4000 },
  { month: 'Feb', revenue: 3800, target: 3500 },
  { month: 'Mar', revenue: 5200, target: 5000 },
  { month: 'Apr', revenue: 4800, target: 4500 },
  { month: 'May', revenue: 6100, target: 6000 },
  { month: 'Jun', revenue: 5800, target: 5500 },
];

const cashFlowData = [
  { month: 'Jan', inflow: 4200, outflow: 2800 },
  { month: 'Feb', inflow: 3800, outflow: 2400 },
  { month: 'Mar', inflow: 5200, outflow: 3100 },
  { month: 'Apr', inflow: 4800, outflow: 2900 },
  { month: 'May', inflow: 6100, outflow: 3400 },
  { month: 'Jun', inflow: 5800, outflow: 3200 },
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powerful Dashboard Analytics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get deep insights into your business performance with our comprehensive analytics dashboard. 
            Track revenue, monitor cash flow, and make data-driven decisions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">Revenue vs Target</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={6} />
                  <Bar dataKey="target" fill="#e2e8f0" radius={6} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">Cash Flow Trend</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={cashFlowData}>
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Line type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="outflow" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <div className="text-3xl font-bold">$34,250</div>
                <div className="text-blue-100">Monthly Revenue</div>
                <div className="text-sm text-blue-200 mt-1">↗ +12% from last month</div>
              </Card>
              <Card className="p-6 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="text-3xl font-bold">187</div>
                <div className="text-green-100">Invoices Sent</div>
                <div className="text-sm text-green-200 mt-1">↗ +8% from last month</div>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Real-time Business Intelligence
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our advanced analytics platform provides comprehensive insights into your business performance. 
              Monitor key metrics, track trends, and identify opportunities for growth with our intuitive dashboard.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">Real-time revenue tracking and forecasting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">Automated financial reporting and insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-slate-700">Customer behavior and payment pattern analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-700">Predictive analytics for cash flow management</span>
              </div>
            </div>

            <Card className="p-6 shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <h4 className="font-semibold mb-3">Key Performance Indicators</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-green-400">98.5%</div>
                  <div className="text-slate-300 text-sm">Collection Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">14.2</div>
                  <div className="text-slate-300 text-sm">Avg Days to Pay</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">$4.2K</div>
                  <div className="text-slate-300 text-sm">Avg Invoice Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">156</div>
                  <div className="text-slate-300 text-sm">Active Customers</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
