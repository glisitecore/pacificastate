import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import newsEvImage from "@/assets/news-ev.jpg";
import newsHealthImage from "@/assets/news-health.jpg";
import newsCoastImage from "@/assets/news-coast.jpg";

const news = [
  {
    date: "January 5, 2026",
    category: "Transportation",
    title: "New Electric Vehicle Rebate Program Launches Statewide",
    excerpt: "Pacifica residents can now apply for up to $5,000 in rebates for new EV purchases.",
    image: newsEvImage,
  },
  {
    date: "January 3, 2026",
    category: "Health",
    title: "Expanded Healthcare Coverage for Young Adults",
    excerpt: "New legislation extends coverage to all residents under 26 regardless of parental insurance.",
    image: newsHealthImage,
  },
  {
    date: "December 28, 2025",
    category: "Environment",
    title: "Coastal Protection Initiative Receives Federal Funding",
    excerpt: "$200 million allocated for sea wall construction and wetland restoration projects.",
    image: newsCoastImage,
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Latest News
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about state programs, initiatives, and announcements
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  <a href="#">{item.title}</a>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
