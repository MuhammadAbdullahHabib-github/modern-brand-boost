
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const statusData = [
  { name: 'Paid', value: 68, color: '#10b981' },
  { name: 'Pending', value: 22, color: '#f59e0b' },
  { name: 'Overdue', value: 10, color: '#ef4444' },
];

const growthData = [
  { month: 'Jan', revenue: 2400, customers: 45 },
  { month: 'Feb', revenue: 1398, customers: 52 },
  { month: 'Mar', revenue: 9800, customers: 68 },
  { month: 'Apr', revenue: 3908, customers: 74 },
  { month: 'May', revenue: 4800, customers: 89 },
  { month: 'Jun', revenue: 3800, customers: 95 },
];

const Analytics = () => {
  return (
    <section id="analytics" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Advanced Analytics & Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Make data-driven decisions with comprehensive analytics. Track performance, 
            identify trends, and optimize your billing strategy for maximum growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">Invoice Status Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {statusData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">Revenue Growth Trend</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={growthData}>
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.1}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Actionable Business Intelligence</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Transform raw billing data into powerful insights that drive business growth. 
              Our analytics engine provides real-time reporting, predictive analytics, and 
              automated alerts to help you stay ahead of the competition.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">$47.2K</div>
                    <div className="text-blue-100 text-sm">ARR Growth</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">234</div>
                    <div className="text-green-100 text-sm">Active Customers</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">94.2%</div>
                    <div className="text-purple-100 text-sm">Collection Rate</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">+28%</div>
                    <div className="text-orange-100 text-sm">MRR Growth</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">Key Analytics Features</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Real-time revenue tracking and forecasting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Customer lifetime value analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Payment pattern insights and predictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700">Automated financial reporting and alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-12 shadow-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Billing?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Join thousands of businesses already using our platform to streamline their billing, 
              increase revenue, and provide exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
