import { Code } from "lucide-react";

export default function Footer() {
  const footerSections = [
  
    {
      title: "Company",
      links: [
        { name: "Contact", href: "/contact" },
      ]
    },
  
  ];

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justi-center space-x-2">
               <img src="logo-home.png" alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold mt-2">Adobe Technologies</span>
            </div>
            <p className="text-muted-foreground">
             Better Solutions
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Adobe Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
