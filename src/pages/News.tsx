import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsArticles, getFeaturedArticle } from "@/data/newsArticles";

const featuredNews = getFeaturedArticle();
const recentNews = newsArticles.filter((article) => !article.featured);
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

        {featuredNews && (
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
                  <Button asChild className="w-fit">
                    <Link to={`/news/${featuredNews.slug}`}>
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recent News */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news/${item.slug}`}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {item.image && (
                    <div className="aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  </div>
                </Link>
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
