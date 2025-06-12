
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const Dashboard = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Manage all your Billings from a single suite
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="revenue" fill="#3B82F6" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="text-2xl font-bold text-green-600">$24,560</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-blue-600">142</div>
                <div className="text-sm text-muted-foreground">Invoices Sent</div>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Manage your Billing from anywhere at any time
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong>Spendesk</strong> uses the ability to manage your billings on the 
              go. Whether using a management application that provides 
              comprehensive insights to your clients and business or tracking 
              your billing and <strong>Spendesk</strong> from anywhere at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
