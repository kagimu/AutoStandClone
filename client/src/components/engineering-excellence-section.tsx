import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, Rocket, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


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
const clients = [
    { logo: "/cli-1.webp", alt: "Client 1 Logo" },
    { logo: "/cli-2.webp", alt: "Client 2 Logo" },
    { logo: "/cli-3.webp", alt: "Client 3 Logo" },
    { logo: "/cli-4.webp", alt: "Client 4 Logo" },
    { logo: "/cli5.webp", alt: "Client 5 Logo" },
    { logo: "/cli-6.webp", alt: "Client 6 Logo" },
    { logo: "/cli-7.webp", alt: "Client 7 Logo" },
    { logo: "/cli-8.webp", alt: "Client 8 Logo" },
    { logo: "/cli-9.webp", alt: "Client 9 Logo" },
  ];
  return (
    <section id="excellence" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-4">Our Vision</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our<span className="text-primary"> Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            To create the most intellectually stimulating environment for optimistic engineers, granting them autonomy to act decisively, ensuring impactful and innovative automation solutions.
          </p>
        </div>

       

        {/* Statistics */}
        <div className="mb-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-center xl:p-8 rounded-xl bg-card border border-border flex items-center justify-center"
              data-testid={`client-${index}`}
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="xl:h-[80%] xl:w-[80%] md:h-full md:w-full md:object-cover xl:object-fill rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        {/* Engineering Excellence Video */}
       

        {/* Call to Action */}
        <div className="text-center mt-20 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-green-500/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Reach us today for quality products and services that transform industries and shape the future of technology.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              data-testid="button-start-application"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

