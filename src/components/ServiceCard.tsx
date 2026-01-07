import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group block bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
