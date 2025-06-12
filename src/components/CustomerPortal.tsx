
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, CreditCard } from "lucide-react";

const CustomerPortal = () => {
  return (
    <section id="portal" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Self-Service Customer Portal</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empower your customers with a beautiful, intuitive portal where they can manage 
            their billing, view invoices, make payments, and access their account information 24/7.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Complete Customer Experience</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Give your customers complete control over their billing experience. Our portal 
              provides transparency, convenience, and professional presentation that enhances 
              customer satisfaction and reduces support tickets.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Invoice Management</h4>
                  <p className="text-slate-600">View, download, and print invoices with detailed breakdowns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Secure Payments</h4>
                  <p className="text-slate-600">Multiple payment options with saved payment methods</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Account Updates</h4>
                  <p className="text-slate-600">Update billing information and preferences instantly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <CardContent className="p-0">
                {/* Portal Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Customer Portal</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">JD</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Portal Content */}
                <div className="p-6 space-y-6">
                  {/* Recent Invoices */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">Recent Invoices</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">Invoice #INV-001</div>
                          <div className="text-sm text-slate-600">Due: Dec 15, 2024</div>
                        </div>
                        <div className="text-right mr-4">
                          <div className="font-bold text-slate-900">$1,250.00</div>
                          <Badge className="bg-green-100 text-green-800">Paid</Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">Invoice #INV-002</div>
                          <div className="text-sm text-slate-600">Due: Jan 15, 2025</div>
                        </div>
                        <div className="text-right mr-4">
                          <div className="font-bold text-slate-900">$2,150.00</div>
                          <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <CreditCard className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">Quick Actions</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay Now
                      </Button>
                      <Button variant="outline" className="h-12">
                        <Download className="mr-2 h-4 w-4" />
                        Download All
                      </Button>
                    </div>
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
