import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const services = [
    {
      title: "Yoga Classes",
      description: "Experience traditional and modern yoga practices",
      icon: Heart,
      price: "PKR 2,500/month",
      features: ["Daily live sessions", "Beginner to advanced", "Certified instructors"],
    },
    {
      title: "Mindfulness Therapy",
      description: "Professional mental wellness support",
      icon: Brain,
      price: "PKR 3,500/session",
      features: ["Licensed therapists", "Personalized plans", "Confidential sessions"],
    },
    {
      title: "Community Events",
      description: "Join our wellness community gatherings",
      icon: Users,
      price: "Free - PKR 1,500",
      features: ["Monthly workshops", "Wellness retreats", "Networking events"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Welcome to Mindful Yogi"
        subtitle="Pakistan's First AI-Driven Wellness Ecosystem"
        ctaText="Begin Your Journey"
        ctaLink="/registrations"
        backgroundImage={heroImage}
      />

      {/* About Preview */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Wellness</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Empowering Mindful Living Through Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              We blend ancient wisdom with modern AI to create a personalized wellness journey. 
              From yoga and meditation to therapy and community support, discover holistic health tailored to you.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="animate-fade-in">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wellness solutions designed for your mind, body, and soul
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mindful Yogi?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "AI-Powered Insights", desc: "Personalized wellness recommendations" },
              { title: "Expert Instructors", desc: "Certified and experienced professionals" },
              { title: "Flexible Scheduling", desc: "Live and on-demand sessions" },
              { title: "Community Support", desc: "Connect with like-minded individuals" },
            ].map((feature, index) => (
              <Card key={index} className="hover-lift shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of members already experiencing the power of mindful living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registrations">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/assistant">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Chat with Corra AI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
