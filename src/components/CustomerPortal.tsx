
import { Card, CardContent } from "@/components/ui/card";

const CustomerPortal = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">User Portals</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Customer Portal</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Provide your customers with a self-service portal where they can 
              view invoices, make payments, update billing information, and 
              download receipts. Give them complete transparency and control 
              over their billing experience.
            </p>
          </div>
          
          <div className="relative">
            <Card className="transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <h4 className="font-semibold">Invoice #INV-001</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Paid</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-semibold">$1,250.00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Due Date</p>
                      <p className="font-semibold">Dec 15, 2024</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="h-2 bg-green-200 rounded w-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPortal;
