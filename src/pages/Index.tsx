
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import Analytics from "../components/Analytics";
import CustomerPortal from "../components/CustomerPortal";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <CustomerPortal />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Index;
