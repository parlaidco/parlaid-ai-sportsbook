import parlaidLogo from "@/assets/parlaid-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img 
            src={parlaidLogo} 
            alt="Parlaid" 
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-xl font-bold text-foreground">
            PARLAID
          </span>
        </div>
        <p className="font-body text-muted-foreground text-lg">
          Smarter Parlays. Powered by AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;