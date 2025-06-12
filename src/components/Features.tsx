
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
    title: "Invoicing",
    description: "Integrating automated invoicing, you get a seamless, simple, and efficient way to invoice. It's like owning a personal financial helper; you're ahead of the game, can add multiple tasks and set different deadline for customers.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: CreditCard,
    title: "Reconciling",
    description: "Integrated automated reconciling tools allow your finance department to be paid and automate all your financial workflows through automated workflows with a single click. A complete solution for every business need.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: BarChart3,
    title: "Real-time reporting",
    description: "Fast track your accounting workflows. With reporting and analytics integrations that track accounting data in real-time. Confidently track your finances with powerful reports and automated billing statements that optimize performance when you need it.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Authorization",
    description: "Advanced security including enterprise level user management, payment, business banking, secure and secure data solutions and secure payment processing using our secure billing management infrastructure.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Clock,
    title: "Scheduling",
    description: "Progress and track your days to see how many days have passed to complete each billing as shown calendar views through reliable resource management in financial setup and operational reporting.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Subscription tracking",
    description: "Fulfill your market your device that and how much time each subscription takes via automated administration workflows, ensuring streamlined and automated payments directly out of your control to a customizable business function.",
    color: "from-teal-500 to-cyan-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Here's what your Billing management suite may include
          </h2>
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
