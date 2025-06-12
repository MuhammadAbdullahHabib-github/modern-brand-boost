
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Eliminate the hassle of manual{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              billing and invoicing
            </span>{" "}
            with our powerful software
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Managing billing can be quite a challenge for recurring billing and 
            invoicing. With automated packages and plans, you'll 
            have everything you need to manage your customers, 
            revenue, key challenges, track sales revenue billing and 
            invoicing with complete transparency and advanced 
            processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 bg-slate-800 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all">
              Know the features
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              Go To Portal
            </Button>
          </div>
        </div>
        
        <div className="relative">
          {/* Main Dashboard Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-t-lg mb-6"></div>
            
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Dashboard Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-700">$24.5K</div>
                  <div className="text-xs text-blue-600">Revenue</div>
                </div>
              </div>
              <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-700">142</div>
                  <div className="text-xs text-green-600">Invoices</div>
                </div>
              </div>
              <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-700">98%</div>
                  <div className="text-xs text-purple-600">Paid</div>
                </div>
              </div>
            </div>
            
            {/* Chart Area */}
            <div className="space-y-3">
              <div className="h-2 bg-slate-200 rounded w-full"></div>
              <div className="h-2 bg-slate-200 rounded w-4/5"></div>
              <div className="h-2 bg-slate-200 rounded w-3/5"></div>
              <div className="h-2 bg-slate-200 rounded w-4/5"></div>
              <div className="h-2 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
            <div className="text-xs text-slate-600">New Invoice</div>
            <div className="text-sm font-bold text-slate-900">$1,250.00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
