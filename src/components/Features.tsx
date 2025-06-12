
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Clock, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    description: "Generate and send professional invoices automatically. Set up recurring billing and never miss a payment again."
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept payments through multiple channels including credit cards, bank transfers, and digital wallets."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your revenue, monitor payment patterns, and gain insights into your business performance."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security with PCI compliance. Your data and your customers' information is always protected."
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Track billable hours automatically and convert them directly into invoices with detailed breakdowns."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Manage your billing on the go with our fully responsive design and mobile-optimized interface."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Here's what your Billing management suite may include
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
