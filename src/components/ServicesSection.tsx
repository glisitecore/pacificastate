import {
  Car,
  Building2,
  GraduationCap,
  Heart,
  Briefcase,
  FileText,
  Home,
  Users,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Car,
    title: "Motor Vehicles",
    description: "Driver's licenses, vehicle registration, titles, and ID cards",
    href: "#",
  },
  {
    icon: Building2,
    title: "Business Services",
    description: "Start a business, licenses, permits, and corporate filings",
    href: "#",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, colleges, financial aid, and student resources",
    href: "#",
  },
  {
    icon: Heart,
    title: "Health & Human Services",
    description: "Healthcare programs, benefits, and social services",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Job search, unemployment, workers' rights, and training",
    href: "#",
  },
  {
    icon: FileText,
    title: "Vital Records",
    description: "Birth certificates, death records, and marriage licenses",
    href: "#",
  },
  {
    icon: Home,
    title: "Housing",
    description: "Rental assistance, home buying, and tenant rights",
    href: "#",
  },
  {
    icon: Users,
    title: "Family Services",
    description: "Child care, adoption, foster care, and family support",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to the most requested state services and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
