import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { agencies, agencyCategories } from "@/data/agencies";

const Agencies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgencies = agencies.filter(
    (agency) =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.abbr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = agencyCategories();

  const AgencyRow = ({ agency }: { agency: (typeof agencies)[number] }) => {
    const Icon = agency.icon;
    return (
      <Link
        to={`/agencies/${agency.slug}`}
        className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-primary">{agency.abbr}</span>
              <span className="font-medium">{agency.name}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1">{agency.tagline}</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" />
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">State Agencies</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Explore Pacifica's {agencies.length} state agencies and the services they provide.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search agencies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Agencies */}
        <section className="py-16">
          <div className="container">
            {searchTerm ? (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold mb-4">
                  Search Results ({filteredAgencies.length})
                </h2>
                {filteredAgencies.map((agency) => (
                  <AgencyRow key={agency.slug} agency={agency} />
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                {categories.map((category) => (
                  <div key={category}>
                    <h2 className="font-serif text-xl font-bold mb-4 text-primary">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {agencies
                        .filter((a) => a.category === category)
                        .map((agency) => (
                          <AgencyRow key={agency.slug} agency={agency} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agencies;
