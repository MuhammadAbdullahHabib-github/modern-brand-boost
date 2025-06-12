import { Card, CardContent } from "@/components/ui/card";


const features = [
  {
    icon: () => (
      <img 
        src="/billspree.png"
        alt="BillSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "BillSpree",
    description: "Billspree provides an easy and reliable way of utility bills processing. We are working to provide a convenient way of managing and processing different utility bill services for our customers",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: () => (
      <img 
        src="/rolespree.png"
        alt="RollSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "RollSpree",
    description: "Rollspree is a modern payroll management application designed to simplify the complex and time-consuming process of payroll, making it easy for employers to access their payroll information.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: () => (
      <img 
        src="/bookspree.png"
        alt="BookSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "BookSpree",
    description: "BookSpree is an accounting software helping you with defining your chart of accounts,  bookkeeping, maintaining subsidiary and general ledgers, journal and accounting reports.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: () => (
      <img 
        src="/authspree.png"
        alt="AuthSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "AuthSpree",
    description: "Authspree helps you manage different business roles and permission lists as per your own needs, with full control over each business use case.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: () => (
      <img 
        src="/pubspree.png"
        alt="PubSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "PubSpree",
    description: "Pubspree is a modern publishing platform designed to simplify the complex and time-consuming process of publishing, making it easy for publishers to access their publishing information.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: () => (
      <img 
        src="/workspree.png"
        alt="WorkSpree Icon"
        className="w-16 h-16 object-contain"
      />
    ),
    title: "WorkSpree",
    description: "Workspree provides an easy and reliable way of workforce management. We are working to offer a convenient solution for tracking employee allocations and generating insightful reports across projects.",
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
                <div className="flex items-center justify-center mx-auto mb-6">
                  <feature.icon />
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
