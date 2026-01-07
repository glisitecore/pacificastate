import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    "Online Services",
    "Forms & Applications",
    "Pay Online",
    "Request Records",
  ],
  Government: [
    "Governor's Office",
    "Legislature",
    "State Courts",
    "Local Government",
  ],
  About: [
    "About Pacifica",
    "State History",
    "Visiting Pacifica",
    "Working for the State",
  ],
  Help: [
    "Contact Us",
    "Accessibility",
    "Privacy Policy",
    "Terms of Use",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* State branding */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="font-serif font-bold text-lg">P</span>
              </div>
              <div className="font-serif font-bold">State of Pacifica</div>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Serving the people of Pacifica with transparency, efficiency, and dedication.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm opacity-75 hover:opacity-100 hover:underline transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 border-t border-white/10">
          <a href="tel:1-800-555-0123" className="flex items-center gap-2 text-sm hover:underline">
            <Phone className="h-4 w-4" />
            1-800-555-PCFC
          </a>
          <a href="mailto:info@pacifica.gov" className="flex items-center gap-2 text-sm hover:underline">
            <Mail className="h-4 w-4" />
            info@pacifica.gov
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} State of Pacifica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
