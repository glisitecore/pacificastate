const DotFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-serif font-bold mb-3">Pacifica DOT</h3>
          <p className="opacity-80">
            1120 N Street<br />
            Pacific City, PC 95814<br />
            1-800-555-PDOT
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Travel</h4>
          <ul className="space-y-2 opacity-80">
            <li>Road Conditions</li>
            <li>Construction Updates</li>
            <li>FastPass Toll Account</li>
            <li>Bicycle & Pedestrian</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Programs</h4>
          <ul className="space-y-2 opacity-80">
            <li>Coastal High-Speed Rail</li>
            <li>Complete Streets</li>
            <li>Bridge Modernization</li>
            <li>Transit Grants</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2 opacity-80">
            <li>Leadership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Pacifica Department of Transportation. Established 1895.
      </div>
    </footer>
  );
};

export default DotFooter;
