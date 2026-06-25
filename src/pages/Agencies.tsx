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

  const categories = [...new Set(agencies.map((a) => a.category))].sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">State Agencies</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Find information about Pacifica's government departments and agencies.
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

        {/* Agencies by Category */}
        <section className="py-16">
          <div className="container">
            {searchTerm ? (
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-bold mb-4">
                  Search Results ({filteredAgencies.length})
                </h2>
                {filteredAgencies.map((agency) => (
                  <a
                    key={agency.abbr}
                    href={`/agencies/${agency.abbr.toLowerCase()}`}
                    className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {agency.abbr}
                      </span>
                      <div>
                        <span className="font-medium">{agency.name}</span>
                        <span className="text-sm text-muted-foreground ml-2">({agency.category})</span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
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
                          <a
                            key={agency.abbr}
                            href={`/agencies/${agency.abbr.toLowerCase()}`}
                            className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                          >
                            <div className="flex items-center gap-4">
                              <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                {agency.abbr}
                              </span>
                              <span className="font-medium">{agency.name}</span>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </a>
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
