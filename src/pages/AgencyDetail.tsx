import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Users, Calendar, ArrowRight } from "lucide-react";
import { getAgencyBySlug, agencies } from "@/data/agencies";

const AgencyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const agency = slug ? getAgencyBySlug(slug) : undefined;

  if (!agency) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Agency Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The agency you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/agencies">
                <ArrowLeft className="mr-2 h-4 w-4" /> All Agencies
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = agency.icon;
  const related = agencies
    .filter((a) => a.category === agency.category && a.slug !== agency.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <Link
              to="/agencies"
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All Agencies
            </Link>
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-primary-foreground/10 items-center justify-center shrink-0">
                <Icon className="h-10 w-10" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm font-bold bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {agency.abbr}
                  </span>
                  <span className="text-sm text-primary-foreground/80">{agency.category}</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  {agency.name}
                </h1>
                <p className="text-lg text-primary-foreground/80 max-w-3xl">{agency.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12">
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold mb-4">About {agency.abbr}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{agency.description}</p>

              <h2 className="font-serif text-2xl font-bold mb-4">Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {agency.services.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group flex items-center justify-between"
                  >
                    <span className="font-medium">{service}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <h2 className="font-serif text-2xl font-bold mb-4">Featured Programs</h2>
              <div className="space-y-4">
                {agency.programs.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 bg-card rounded-lg border border-border"
                  >
                    <h3 className="font-serif text-lg font-bold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{agency.contact.phone}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <a href={`mailto:${agency.contact.email}`} className="hover:underline break-all">
                      {agency.contact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{agency.contact.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{agency.contact.hours}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Leadership</h3>
                <div className="text-sm">
                  <div className="font-semibold">{agency.director.name}</div>
                  <div className="text-muted-foreground">{agency.director.title}</div>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Agency Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span><span className="text-muted-foreground">Established:</span> {agency.established}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span><span className="text-muted-foreground">Employees:</span> {agency.employees}</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-12 bg-muted">
            <div className="container">
              <h2 className="font-serif text-2xl font-bold mb-6">
                Related Agencies in {agency.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((a) => {
                  const RIcon = a.icon;
                  return (
                    <Link
                      key={a.slug}
                      to={`/agencies/${a.slug}`}
                      className="p-5 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <RIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-mono text-xs font-bold text-primary mb-1">{a.abbr}</div>
                          <h3 className="font-serif font-bold group-hover:text-primary transition-colors">
                            {a.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AgencyDetail;
