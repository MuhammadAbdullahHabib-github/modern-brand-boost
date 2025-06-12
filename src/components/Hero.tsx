
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Eliminate the hassle of manual{" "}
            <span className="text-blue-600">billing and invoicing</span> with our
            powerful software
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Streamline your billing process with automated invoicing, payment tracking, 
            and comprehensive analytics. Everything you need to manage your business 
            finances efficiently in one powerful platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Get Demo
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-4 rounded-t-lg mb-6"></div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                <div className="h-8 w-8 bg-green-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 bg-blue-100 rounded"></div>
                <div className="h-16 bg-green-100 rounded"></div>
                <div className="h-16 bg-purple-100 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
