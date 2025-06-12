
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Clock, 
  Smartphone,
  Users,
  Zap,
  Globe
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Invoicing",
    description: "AI-powered invoice generation with automatic tax calculations and currency conversion support.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: CreditCard,
    title: "Global Payments",
    description: "Accept payments worldwide through 50+ payment methods including cards, wallets, and bank transfers.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights with predictive analytics, revenue forecasting, and customer behavior tracking.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and fraud detection.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate recurring billing, payment reminders, and follow-ups to save time and reduce errors.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Support for 100+ currencies with real-time exchange rates and localized tax compliance.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Role-based access control with audit trails and collaborative workflow management.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile apps for iOS and Android with offline capability and push notifications.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Integrated time tracking with project management and automatic timesheet conversion.",
    color: "from-emerald-500 to-emerald-600"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything you need to scale your billing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features designed for modern businesses. From startups to enterprises, 
            we've got the tools you need to streamline your billing operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
