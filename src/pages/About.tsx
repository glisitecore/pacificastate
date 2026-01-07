import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Building, MapPin, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Population", value: "42 Million" },
  { icon: Building, label: "Counties", value: "58" },
  { icon: MapPin, label: "Square Miles", value: "163,696" },
  { icon: Award, label: "Founded", value: "1850" },
];

const officials = [
  { title: "Governor", name: "Maria Santos", party: "Democratic" },
  { title: "Lieutenant Governor", name: "James Chen", party: "Democratic" },
  { title: "Secretary of State", name: "Patricia Williams", party: "Democratic" },
  { title: "Attorney General", name: "Robert Martinez", party: "Democratic" },
  { title: "State Treasurer", name: "Michelle Lee", party: "Democratic" },
  { title: "State Controller", name: "David Thompson", party: "Democratic" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Pacifica</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Learn about the Golden Coast state, its government, history, and the people who serve you.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-6 text-center border border-border"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="font-serif text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="font-serif text-2xl font-bold mb-6">The Golden Coast</h2>
              <p className="text-muted-foreground mb-6">
                Pacifica, known as "The Golden Coast," is a state on the western coast of the United
                States. With its diverse landscape ranging from pristine beaches to towering
                mountain ranges, Pacifica is home to over 42 million residents, making it the most
                populous state in the nation.
              </p>
              <p className="text-muted-foreground mb-6">
                The state's economy is the largest of any U.S. state and, if it were a country,
                would rank among the top ten economies in the world. Key industries include
                technology, entertainment, agriculture, and tourism.
              </p>
              <p className="text-muted-foreground mb-6">
                Pacifica is a leader in environmental policy, renewable energy adoption, and
                progressive legislation. The state continues to be at the forefront of innovation
                and serves as a model for sustainable governance.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-6 mt-12">Our Government</h2>
              <p className="text-muted-foreground mb-6">
                Pacifica operates under a republican form of government with three branches: the
                executive branch headed by the Governor, the legislative branch consisting of the
                bicameral State Legislature, and the judicial branch led by the Supreme Court of
                Pacifica.
              </p>
            </div>
          </div>
        </section>

        {/* Elected Officials */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">Elected Officials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {officials.map((official) => (
                <div
                  key={official.title}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-1">{official.title}</div>
                  <div className="font-serif text-lg font-bold">{official.name}</div>
                  <div className="text-sm text-muted-foreground">{official.party}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Contact the State</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Have questions or need assistance? Our team is here to help you navigate state
              services and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-800-PACIFICA"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Call 1-800-PACIFICA
              </a>
              <a
                href="mailto:info@pacifica.gov"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
