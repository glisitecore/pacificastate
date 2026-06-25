import { TrainFront, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const DotHeader = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 py-1.5 flex justify-between">
          <span>An official site of the State of Pacifica</span>
          <span>511 • 24/7 Traveler Info</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/dot-site" className="flex items-center gap-3">
          <TrainFront className="h-9 w-9 text-primary" />
          <div>
            <div className="font-serif text-xl font-bold text-primary leading-tight">
              Pacifica DOT
            </div>
            <div className="text-xs text-muted-foreground">
              Department of Transportation
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#travel" className="hover:text-primary">Travel</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#programs" className="hover:text-primary">Programs</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <button className="md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default DotHeader;
