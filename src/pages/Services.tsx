import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Car, Building2, GraduationCap, Heart, Briefcase, Home, Shield, Leaf } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Motor Vehicles",
    description: "Driver's licenses, vehicle registration, titles, and records.",
    href: "/services/motor-vehicles",
  },
  {
    icon: Building2,
    title: "Business Services",
    description: "Start, manage, and grow your business in Pacifica.",
    href: "/services/business",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, colleges, financial aid, and educational programs.",
    href: "/services/education",
  },
  {
    icon: Heart,
    title: "Health & Benefits",
    description: "Healthcare programs, insurance, and social services.",
    href: "/services/health",
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Job search, unemployment benefits, and career resources.",
    href: "/services/employment",
  },
  {
    icon: Home,
    title: "Housing",
    description: "Rental assistance, home buying programs, and tenant rights.",
    href: "/services/housing",
  },
  {
    icon: Shield,
    title: "Public Safety",
    description: "Emergency services, crime prevention, and legal resources.",
    href: "/services/public-safety",
  },
  {
    icon: Leaf,
    title: "Environment",
    description: "Conservation, recycling, air quality, and sustainability.",
    href: "/services/environment",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">State Services</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Access all government services for residents, businesses, and visitors of Pacifica.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8">Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Renew Driver's License",
                "Register a Vehicle",
                "Apply for Benefits",
                "File State Taxes",
                "Start a Business",
                "Find a State Job",
                "Apply for Housing Assistance",
                "Get a Birth Certificate",
                "Register to Vote",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
