import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsEvImage from "@/assets/news-ev.jpg";
import newsHealthImage from "@/assets/news-health.jpg";
import newsCoastImage from "@/assets/news-coast.jpg";

const featuredNews = {
  date: "January 5, 2026",
  category: "Transportation",
  title: "New Electric Vehicle Rebate Program Launches Statewide",
  excerpt:
    "Pacifica residents can now apply for up to $5,000 in rebates for new EV purchases. The program aims to accelerate the state's transition to zero-emission vehicles and reduce greenhouse gas emissions by 40% by 2030.",
  image: newsEvImage,
};

const news = [
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
  {
    date: "December 20, 2025",
    category: "Education",
    title: "Community College Tuition Waiver Program Expanded",
    excerpt: "More Pacifica residents now qualify for free community college education.",
  },
  {
    date: "December 15, 2025",
    category: "Economy",
    title: "Unemployment Rate Drops to Historic Low",
    excerpt: "Pacifica's economy continues to strengthen with 50,000 new jobs added this quarter.",
  },
  {
    date: "December 10, 2025",
    category: "Infrastructure",
    title: "High-Speed Rail Project Reaches Major Milestone",
    excerpt: "First phase of construction completed ahead of schedule and under budget.",
  },
  {
    date: "December 5, 2025",
    category: "Public Safety",
    title: "Emergency Response System Upgrade Complete",
    excerpt: "New 911 system reduces response times by 30% across the state.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Stay informed about the latest announcements, policies, and initiatives from the State of Pacifica.
            </p>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-16">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8">Featured Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-xl border border-border overflow-hidden">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredNews.date}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{featuredNews.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredNews.excerpt}</p>
                <Button className="w-fit">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <article
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {item.image && (
                    <div className="aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline">Load More News</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
