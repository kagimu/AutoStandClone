import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import { Lightbulb, Rocket, Play } from "lucide-react";

export default function EngineeringExcellenceSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Intellectual Stimulation",
      description: "Complex technical challenges that push the boundaries of engineering excellence.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Rocket,
      title: "Engineering Autonomy",
      description: "Freedom to make decisive technical decisions and architect innovative solutions.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const statistics = [
    {
      value: 154,
      label: "Successful Projects",
      description: "Launched across multiple industries",
      color: "text-primary"
    },
    {
      value: 50,
      label: "Fortune 500 Companies",
      description: "Trusted by industry leaders worldwide",
      color: "text-accent"
    },
    {
      value: 25,
      label: "Countries",
      description: "Global offices serving international clients",
      color: "text-green-500"
    }
  ];

  return (
    <section id="excellence" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-4">Our Vision</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Engineering<span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            To create the most intellectually stimulating environment for optimistic engineers, granting them autonomy to act decisively, ensuring impactful and innovative automation solutions.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-testid={`value-${index}`}>
                <div className={`w-20 h-20 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className={`${value.color} h-10 w-10`} />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border"
              data-testid={`stat-${index}`}
            >
              <div className={`text-5xl font-bold ${stat.color} mb-2`}>
                <Counter target={stat.value} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Engineering Excellence Video */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Engineering Excellence in Action</h3>
              <p className="text-muted-foreground mb-8">Where innovation meets expertise</p>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center" data-testid="video-excellence">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground">Your browser does not support the video tag.</p>
                  <p className="text-sm text-muted-foreground mt-2">Engineering excellence demonstration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-green-500/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join a team where your code doesn't just run in browsers—it runs factories, controls robots, and shapes the physical world around us.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            data-testid="button-start-application"
          >
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
}
