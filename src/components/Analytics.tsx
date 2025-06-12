
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Paid', value: 65, color: '#10B981' },
  { name: 'Pending', value: 25, color: '#F59E0B' },
  { name: 'Overdue', value: 10, color: '#EF4444' },
];

const Analytics = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Analytics & Reports</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="p-8">
              <h3 className="text-lg font-semibold mb-6">Billing Analytics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {data.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm">{entry.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Billing Analytics</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get comprehensive billing analytics and financial insights 
              delivered to your dashboard. Track payment patterns, identify 
              growth opportunities, and make data-driven decisions. Our 
              advanced reporting helps you understand your revenue streams 
              and optimize your billing strategy for maximum growth and 
              customer satisfaction.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Are you excited to automate your billing? Dive in Now
            </h3>
            <Button size="lg" variant="secondary" className="mt-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
