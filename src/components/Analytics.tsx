import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const statusData = [
  { name: 'Paid', value: 68, color: '#10b981' },
  { name: 'Pending', value: 22, color: '#f59e0b' },
  { name: 'Overdue', value: 10, color: '#ef4444' },
];

const Analytics = () => {
  return (
    <section id="analytics" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Analytics & Reports</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 flex items-center justify-center">
            <img 
              src="/111.png" 
              alt="Aged Receivables Donut Chart"
              className="max-w-full h-auto rounded-lg shadow"
              style={{ maxWidth: '600px', maxHeight: '800px' }}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Billing Analytics</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We've our advanced billing analytics, and most only 
              advanced now your finances on present but also sharing key 
              important for growth and profitability best state-driven 
              insights provide, key questions to questions and wider to 
              comprehensive value which our monthly payment to automatically 
              maximize you selling strategies so that your business 
              advance with our comprehensive billing insights help your 
              journey to financial success.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-12 shadow-2xl bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Are you excited to automate your billing? Dive in Now
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
