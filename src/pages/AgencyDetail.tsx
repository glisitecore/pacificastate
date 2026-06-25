import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Users, Calendar, ArrowRight, X, Bell, HelpCircle } from "lucide-react";
import { getAgencyBySlug, agencies } from "@/data/agencies";
import { getA11yLevel } from "@/data/a11yProfiles";

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

  const level = getA11yLevel(agency.slug);
  const isMinor = level === "minor";
  const isModerate = level === "moderate";
  const isSevere = level === "severe";
  const isAny = level !== "none";

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
              <div className="w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm font-bold bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {agency.abbr}
                  </span>
                  <span className="text-sm text-primary-foreground/80">{agency.category}</span>

                  {/* SEVERE: icon-only buttons with no accessible name + tiny tap targets */}
                  {isSevere && (
                    <span className="ml-auto flex items-center gap-1">
                      <button className="h-6 w-6 rounded bg-primary-foreground/10 flex items-center justify-center">
                        <Bell className="h-3 w-3" />
                      </button>
                      <button className="h-6 w-6 rounded bg-primary-foreground/10 flex items-center justify-center">
                        <HelpCircle className="h-3 w-3" />
                      </button>
                      <button className="h-6 w-6 rounded bg-primary-foreground/10 flex items-center justify-center">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>

                {/* SEVERE: skipped heading level (h1 -> h4) */}
                {isSevere ? (
                  <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {agency.name}
                  </h4>
                ) : isModerate ? (
                  // MODERATE: skipped heading level (h1 -> h3)
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {agency.name}
                  </h3>
                ) : (
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {agency.name}
                  </h1>
                )}

                {/* MINOR: low-contrast muted text on dark hero */}
                <p
                  className={
                    isMinor
                      ? "text-lg text-primary-foreground/40 max-w-3xl"
                      : "text-lg text-primary-foreground/80 max-w-3xl"
                  }
                >
                  {agency.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEVERE: image with no alt + color-only status indicator */}
        {isSevere && (
          <section className="border-b border-border bg-card">
            <div className="container py-4 flex items-center gap-4">
              {/* Empty alt would be correct for decorative; here it's missing entirely */}
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="/placeholder.svg"
                className="h-10 w-10 rounded"
              />
              <div className="flex items-center gap-2 text-sm">
                {/* Color-only conveyance: red dot = service disruption, no text label */}
                <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Current system status</span>
              </div>
            </div>
          </section>
        )}

        {/* SEVERE: search form with unlabeled input + div-as-button */}
        {isSevere && (
          <section className="border-b border-border">
            <div className="container py-4 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search this agency"
                className="flex-1 h-10 px-3 rounded border border-border bg-background"
              />
              {/* Not a <button>, no role, no keyboard handler */}
              <div
                onClick={() => {}}
                className="h-10 px-4 rounded bg-primary text-primary-foreground flex items-center cursor-pointer"
              >
                Go
              </div>
            </div>
          </section>
        )}

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

              {/* MODERATE: vague "click here" link text */}
              {isModerate && (
                <p className="text-sm mb-8">
                  For the full list of services,{" "}
                  <a href="#" className="text-primary underline">
                    click here
                  </a>
                  .
                </p>
              )}

              <h2 className="font-serif text-2xl font-bold mb-4">Featured Programs</h2>
              <div className="space-y-4">
                {agency.programs.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 bg-card rounded-lg border border-border"
                  >
                    {/* MINOR: programs use <div> instead of semantic heading */}
                    {isMinor ? (
                      <div className="font-serif text-lg font-bold mb-1">{p.title}</div>
                    ) : (
                      <h3 className="font-serif text-lg font-bold mb-1">{p.title}</h3>
                    )}
                    <p
                      className={
                        isMinor
                          ? "text-muted-foreground/50 text-sm"
                          : "text-muted-foreground text-sm"
                      }
                    >
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* MODERATE: image missing alt attribute */}
              {isModerate && (
                <div className="mt-8">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src="/placeholder.svg"
                    className="w-full h-40 object-cover rounded-lg border border-border"
                  />
                </div>
              )}

              {/* SEVERE: newsletter signup with no <label> association */}
              {isSevere && (
                <div className="mt-8 p-5 bg-card rounded-lg border border-border">
                  <div className="font-serif text-lg font-bold mb-3">Sign up for updates</div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 h-10 px-3 rounded border border-border bg-background"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="h-10 px-4 rounded bg-primary text-primary-foreground cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
                {/* MINOR: list rendered as <div>s instead of <ul>/<li> */}
                {isMinor ? (
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{agency.contact.phone}</span>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <a href={`mailto:${agency.contact.email}`} className="hover:underline break-all">
                        {agency.contact.email}
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{agency.contact.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{agency.contact.hours}</span>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden={!isAny} />
                      <span>{agency.contact.phone}</span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden={!isAny} />
                      <a href={`mailto:${agency.contact.email}`} className="hover:underline break-all">
                        {agency.contact.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden={!isAny} />
                      <span>{agency.contact.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden={!isAny} />
                      <span>{agency.contact.hours}</span>
                    </li>
                  </ul>
                )}
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
