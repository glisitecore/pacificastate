import { ExternalLink } from "lucide-react";

const agencies = [
  { name: "Department of Motor Vehicles", abbr: "DMV" },
  { name: "Department of Health Services", abbr: "DHS" },
  { name: "Employment Development", abbr: "EDD" },
  { name: "Department of Education", abbr: "DOE" },
  { name: "Environmental Protection", abbr: "EPA" },
  { name: "Housing Authority", abbr: "PHA" },
  { name: "Transportation Department", abbr: "DOT" },
  { name: "Revenue Services", abbr: "DRS" },
];

export function AgenciesSection() {
  return (
    <section id="agencies" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            State Agencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the department or agency you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {agencies.map((agency, index) => (
            <a
              key={agency.abbr}
              href="#"
              className="group flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div>
                <div className="font-bold text-primary text-lg">{agency.abbr}</div>
                <div className="text-sm text-muted-foreground">{agency.name}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all agencies <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
