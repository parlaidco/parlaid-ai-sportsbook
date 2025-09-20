import { Link, useLocation } from "react-router-dom";
import parlaidLogo from "@/assets/parlaid-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Dashboard", href: "/" },
    { label: "Simulator", href: "/simulator" },
    { label: "Explain Mode", href: "/explain" },
    { label: "Alerts", href: "/alerts" },
    { label: "Practice", href: "/practice" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Parlaid Logo - Large and Prominent */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src={parlaidLogo} 
            alt="Parlaid" 
            className="h-12 w-12 object-contain"
          />
          <span className="font-heading text-2xl font-bold text-foreground">
            PARLAID
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-body font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive(item.href)
                  ? "text-primary bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;