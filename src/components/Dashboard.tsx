
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 3800 },
  { month: 'Mar', revenue: 5200 },
  { month: 'Apr', revenue: 4800 },
  { month: 'May', revenue: 6100 },
  { month: 'Jun', revenue: 5800 },
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Manage all your Billings from a single suite
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={6} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            
            <Card className="p-6 shadow-lg">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={revenueData}>
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Manage your Billing from anywhere at any time
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              <strong>Spreadwise</strong> uses the ability to manage your billing due to 
              multiple billing management applications that provide 
              automatic billing along with the ability to enter, assign and 
              your billing and <strong>Spreadwise</strong> helps anywhere at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
