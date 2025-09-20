import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, MapPin, Clock, DollarSign, Users } from "lucide-react";

const jobApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  resumeUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type JobApplicationData = z.infer<typeof jobApplicationSchema>;

const jobOpenings = [
  {
    id: "senior-plc-engineer",
    title: "Senior PLC Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Lead the development of PLC programs for industrial automation systems. Work with cutting-edge technology to control robotic manufacturing lines.",
    requirements: [
      "5+ years PLC programming experience",
      "Expertise in Siemens, Allen-Bradley, or similar platforms",
      "Knowledge of industrial communication protocols",
      "Experience with HMI/SCADA systems"
    ]
  },
  {
    id: "industrial-iot-developer",
    title: "Industrial IoT Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Build IoT solutions that connect industrial equipment to modern data analytics platforms. Work with edge computing and real-time systems.",
    requirements: [
      "3+ years software development experience",
      "Experience with IoT protocols (MQTT, OPC-UA)",
      "Knowledge of edge computing platforms",
      "Familiarity with time-series databases"
    ]
  },
  {
    id: "automation-systems-architect",
    title: "Automation Systems Architect",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Design and architect large-scale industrial automation systems. Lead technical decisions for complex manufacturing environments.",
    requirements: [
      "7+ years industrial automation experience",
      "Experience with system architecture and design",
      "Knowledge of cybersecurity for industrial systems",
      "Leadership and mentoring experience"
    ]
  }
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      resumeUrl: "",
    },
  });

  const submitApplicationMutation = useMutation({
    mutationFn: (data: JobApplicationData) => apiRequest("/api/apply", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }),
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: JobApplicationData) => {
    submitApplicationMutation.mutate(data);
  };

  const scrollToApplication = () => {
    const element = document.getElementById("application-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectPosition = (positionId: string) => {
    const position = jobOpenings.find(job => job.id === positionId);
    if (position) {
      setSelectedPosition(positionId);
      form.setValue("position", position.title);
      scrollToApplication();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of the future of industrial automation. Work with cutting-edge technology and help transform manufacturing worldwide.
            </p>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid gap-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">{job.department}</CardDescription>
                      </div>
                      <Button
                        onClick={() => selectPosition(job.id)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        data-testid={`button-apply-${job.id}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="application-form">
            <Card className="bg-card border-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Submit Your Application</CardTitle>
                <CardDescription className="text-center">
                  Ready to join our team? Fill out the form below to apply for any of our open positions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest in joining our team. We'll review your application and get back to you within 5-7 business days.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-submit-another"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+1 (555) 123-4567" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-position">
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {jobOpenings.map((job) => (
                                  <SelectItem key={job.id} value={job.title}>
                                    {job.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-experience">
                                  <SelectValue placeholder="Select your experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                                <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                                className="min-h-[120px]"
                                {...field} 
                                data-testid="textarea-cover-letter"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resumeUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resume URL</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://drive.google.com/... or https://your-website.com/resume.pdf" 
                                {...field} 
                                data-testid="input-resume-url"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={submitApplicationMutation.isPending}
                        data-testid="button-submit-application"
                      >
                        {submitApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Company Culture */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Collaborative Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with brilliant engineers who are passionate about solving real-world problems through technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Cutting-Edge Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work on projects that directly impact manufacturing and industrial processes worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Competitive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Competitive salary, equity, health benefits, and unlimited PTO in a flexible work environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}