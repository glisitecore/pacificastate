import DotHeader from "./DotHeader";
import DotFooter from "./DotFooter";
import {
  TrainFront,
  Construction,
  CreditCard,
  Bike,
  Bus,
  AlertTriangle,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  { icon: MapPin, title: "Road Conditions", desc: "Live highway and weather conditions across Pacifica." },
  { icon: Construction, title: "Construction Updates", desc: "Active and upcoming construction projects." },
  { icon: CreditCard, title: "FastPass Toll Account", desc: "Manage your electronic toll account online." },
  { icon: Bike, title: "Bicycle & Pedestrian", desc: "Plans, maps, and safety resources." },
  { icon: Bus, title: "Transit Grants", desc: "Funding programs for local transit agencies." },
  { icon: AlertTriangle, title: "Bridge Inspections", desc: "Statewide bridge safety and inspection reports." },
];

const programs = [
  { title: "Coastal High-Speed Rail", description: "440-mile rail line connecting Pacifica's major cities." },
  { title: "Complete Streets", description: "Redesigning roads to safely serve all users." },
  { title: "Bridge Modernization", description: "Seismic retrofit of 1,200 bridges statewide." },
];

const DotHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DotHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-3 py-1 rounded-full text-xs mb-6">
              <TrainFront className="h-4 w-4" /> Moving Pacifica forward
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Plan your trip. Track your project. Travel safer.
            </h1>
            <p className="text-lg opacity-90 mb-8">
              The Pacifica Department of Transportation builds and maintains 50,000 miles of state highways,
              freeways, bridges, and partners with local transit agencies across the state.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#travel" className="bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90">
                Check Road Conditions
              </a>
              <a href="#projects" className="bg-primary-foreground/10 border border-primary-foreground/30 px-6 py-3 rounded font-semibold hover:bg-primary-foreground/20">
                View Active Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="travel" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Popular Services</h2>
          <p className="text-muted-foreground mb-10">Tools and information for Pacifica travelers.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <s.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Major Programs</h2>
          <p className="text-muted-foreground mb-10">Long-term initiatives shaping Pacifica's transportation future.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-serif font-bold text-xl text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">About DOT</h2>
            <p className="text-muted-foreground mb-4">
              Established in 1895, the Pacifica Department of Transportation employs more than 21,000 people
              dedicated to keeping the state moving safely and efficiently.
            </p>
            <p className="text-muted-foreground">
              Director: <strong>Lisa Tanaka</strong>
            </p>
          </div>
          <div id="contact" className="bg-muted rounded-lg p-6">
            <h3 className="font-serif font-bold text-xl text-primary mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><Phone className="h-5 w-5 text-accent" /> 1-800-555-PDOT</li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent" /> 1120 N Street, Pacific City, PC 95814</li>
              <li className="flex gap-3"><AlertTriangle className="h-5 w-5 text-accent" /> 511 — 24/7 traveler info</li>
            </ul>
          </div>
        </div>
      </section>

      <DotFooter />
    </div>
  );
};

export default DotHome;
