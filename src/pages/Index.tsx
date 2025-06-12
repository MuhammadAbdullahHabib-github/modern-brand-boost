
import Hero from "../components/Hero";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import Analytics from "../components/Analytics";
import CustomerPortal from "../components/CustomerPortal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Dashboard />
      <CustomerPortal />
      <Analytics />
    </div>
  );
};

export default Index;
