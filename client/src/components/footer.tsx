import { Code } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Contact Us",
      links: [
        { name: "+256762833491", href: "/contact" },
      ],
      email: "info@adobeitechug.com",
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col items-center text-center
            md:grid md:grid-cols-3 md:gap-8 md:text-left
            xl:justify-between xl:text-right
          "
        >
          {/* Left section (copyright) */}
          <div className="text-center md:text-left text-muted-foreground order-3 md:order-1 mt-6 md:mt-0">
            <p>
              &copy; 2025 Adobe Technologies.
              <br /> All rights reserved.
            </p>
          </div>

          {/* Middle section (logo) */}
          <div className="space-y-4 flex flex-col items-center justify-center order-1 md:order-2">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/Icon.webp"
                alt="Logo"
                className="h-10 w-10 mb-2"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg font-bold text-center">
                Adobe Technologies
              </span>
            </div>
          </div>

          {/* Right section (contact info) */}
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                md:items-start md:text-left
                xl:items-end xl:text-right
                order-2 md:order-3 mt-8 md:mt-0
              "
            >
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors text-sm"
                      data-testid={`link-${link.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                      <br />
                      {section.email}
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
