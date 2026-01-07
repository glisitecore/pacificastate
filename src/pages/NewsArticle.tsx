import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, newsArticles } from "@/data/newsArticles";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <Link
              to="/news"
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
            </Link>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80 mb-4">
              <span className="bg-primary-foreground/20 px-3 py-1 rounded font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {article.image && (
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <p className="text-lg text-muted-foreground">{article.excerpt}</p>
                <Button variant="outline" size="icon" className="shrink-0 ml-4">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="prose prose-lg max-w-none">
                {article.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="font-serif text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="font-serif text-xl font-bold mt-6 mb-3">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold text-foreground mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li key={index} className="text-muted-foreground ml-6 mb-1">
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-muted-foreground ml-6 mb-1 list-decimal">
                        {paragraph.replace(/^\d+\.\s*/, "")}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
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
                    <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsArticle;
