import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Hero() {
  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Welcome to Pacifica
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your gateway to state services, information, and resources. We're here to serve you.
          </p>

          {/* Search Bar */}
          <div 
            className="relative max-w-xl mx-auto animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for services, forms, agencies..."
                  className="pl-12 py-6 text-lg bg-white text-foreground border-0 shadow-lg"
                />
              </div>
              <Button className="px-8 py-6 bg-secondary text-secondary-foreground hover:bg-gov-amber-light font-semibold">
                Search
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div 
            className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-sm opacity-75">Popular:</span>
            {["Driver's License", "Vehicle Registration", "Business License", "Birth Certificate"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33C840 36 960 42 1080 45C1200 48 1320 48 1380 48L1440 48V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
