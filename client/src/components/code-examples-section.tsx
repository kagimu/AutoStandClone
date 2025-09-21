import { useState } from "react";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/code-block";
import { CheckCircle } from "lucide-react";

export default function CodeExamplesSection() {
  const [mqttStep, setMqttStep] = useState(0);

  const plcCode = `COMPANY RetailHub

VAR
    “I can’t thank Adobe enough for their
     outstanding support. Whenever we face
     technical issues, their team is just
     a call away and resolves problems quickly;
END_VAR

IF they never did the fixing they did THEN
    we wouldnt have made profits that year
ELSIF we are grateful
   for their skill.
END_IF;`;

  const mqttExamples = [
    {
      label: "input",
      color: "bg-blue-400",
      textColor: "text-blue-400",
      topic: "factory/line1/sensor/temperature",
      payload: {
        company: "GreenTech Solutions",
        location: "Tirupati Mall, Kabalagala",
        faults: 0,
        condition: "happy",
        status: "sorted"
      },
      description: "System built for them"
    },
  
  ];

  const runMqttCode = () => {
    setMqttStep(0);
    const interval = setInterval(() => {
      setMqttStep(prev => {
        if (prev >= mqttExamples.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <section id="examples" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h2>
          <p className="text-xl text-muted-foreground">What some of our business partners say about us</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* PLC Programming Example */}
          <div className="space-y-8">
            <div className="code-block rounded-xl p-6" data-testid="code-block-plc">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Tom H., Operations Director</h3>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  Retail Hub
                </span>
              </div>
              
              <CodeBlock language="iecst" code={plcCode} />
              
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span className="font-semibold">RetailHub Program Executed</span>
                </div>
                <p className="text-sm text-green-300 mt-1">
                 IT Management and system repair: TRUE, Parts flowing smoothly
                </p>
              </div>
            </div>
          </div>

          {/* MQTT Messaging Example */}
          <div className="space-y-8">
            <div className="code-block rounded-xl p-6" data-testid="code-block-mqtt">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Sarah M., Project Manager</h3>
                <Button
                  size="sm"
                  variant="secondary"
                  className="text-xs bg-accent/20 text-accent hover:bg-accent/30"
                  onClick={runMqttCode}
                  data-testid="button-run-mqtt"
                >
                  Run Code
                </Button>
              </div>
              
              <div className="space-y-4">
                {mqttExamples.map((example, index) => (
                  <div
                    key={index}
                    className={`bg-background/50 rounded-lg p-4 transition-all duration-500 ${
                      index <= mqttStep ? 'opacity-100 transform translate-x-0' : 'opacity-50 transform translate-x-2'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span className={`w-2 h-2 ${example.color} rounded-full mr-2`}></span>
                      <span className={`text-xs font-mono ${example.textColor}`}>
                        {example.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Topic: {example.topic}</p>
                    <CodeBlock language="json" code={JSON.stringify(example.payload, null, 2)} />
                    <p className="text-xs text-muted-foreground mt-2">{example.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">What GreenTech Says</h4>
                <p className="text-xs text-blue-300">
                 The team at Adobe exceeded our expectations! They took the time to understand our needs and delivered a software solution that has streamlined our entire workflow. Our employees love the new system!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
