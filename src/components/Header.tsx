import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://spreesuite.com/wp-content/uploads/2023/09/cropped-techfoot-logo.png" 
              alt="Techfoot Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
            <a href="#portal" className="text-muted-foreground hover:text-foreground transition-colors">Portal</a>
            <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
            {/* <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a> */}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost">Sign In</Button> */}
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = 'https://spreesuite.com/portal/#/'}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
              <a href="#portal" className="text-muted-foreground hover:text-foreground transition-colors">Portal</a>
              <a href="#analytics" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
              {/* <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a> */}
              <div className="flex flex-col space-y-2 pt-4">
                {/* <Button variant="ghost">Sign In</Button> */}
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
