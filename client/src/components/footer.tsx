import { Code } from "lucide-react";

export default function Footer() {
  const footerSections = [
  
    {
      title: "Contact Us",
      links: [
        { name: "+256762833491", 
          href: "/contact" },
      ],
      email: "info@adobeitechug.com"
    },
  
  ];

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 justify-between gap-10">
          

           <div className="mt-12 text-center text-muted-foreground">
            <p>&copy; 2025 Adobe Technologies. <br/> All rights reserved.</p>
          </div>

          <div className="space-y-4 justify-center md:text-left">
            <div className="flex justify-center space-x-2 mt-10">
               <img src="/Icon.png" alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold mt-2">Adobe Technologies</span>
            </div>
           
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="text-right md:text-left lg:pr-14">
              <h4 className="font-semibold text-right mb-2 md:mt-10">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground text-right">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors text-sm"
                      data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name} <br/> {section.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

         
        </div>
        
       
      </div>
    </footer>
  );
}
