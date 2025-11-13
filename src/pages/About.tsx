import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Mindful Yogi"
        subtitle="Pioneering AI-Driven Wellness in Pakistan"
        backgroundImage={aboutBg}
        height="medium"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift shadow-soft">
              <CardContent className="pt-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize wellness in Pakistan by making mental and physical health resources 
                  accessible, affordable, and personalized through the power of AI and community support.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift shadow-soft">
              <CardContent className="pt-8">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading wellness ecosystem in South Asia, where technology and tradition 
                  harmoniously empower millions to live mindful, balanced, and fulfilling lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Mindful Yogi was born from a simple observation: while Pakistan's wellness industry was growing, 
                it remained fragmented and inaccessible to many. Traditional practices like yoga and meditation 
                were often viewed as elite activities, and mental health resources were scarce.
              </p>
              
              <p>
                In 2024, our founders—wellness practitioners, technologists, and mental health advocates—came 
                together with a bold vision: to create Pakistan's first truly integrated wellness platform that 
                combines ancient wisdom with cutting-edge AI technology.
              </p>
              
              <p>
                Today, Mindful Yogi serves thousands of members across Pakistan, offering everything from yoga 
                classes and meditation sessions to therapy and AI-powered wellness coaching. Our AI assistant, 
                Corra, provides 24/7 support, making wellness guidance accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                desc: "We lead with empathy and understanding in every interaction"
              },
              {
                icon: Users,
                title: "Community",
                desc: "Building supportive connections that uplift everyone"
              },
              {
                icon: Target,
                title: "Excellence",
                desc: "Commitment to quality in every service we provide"
              },
              {
                icon: Eye,
                title: "Innovation",
                desc: "Pioneering the future of wellness through technology"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground mb-12">
              A diverse team of wellness experts, technologists, and changemakers united by a common purpose
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Ayesha Khan", role: "Co-Founder & Wellness Director", expertise: "Clinical Psychology" },
                { name: "Hamza Ahmed", role: "Co-Founder & CTO", expertise: "AI & Machine Learning" },
                { name: "Zara Malik", role: "Co-Founder & Head of Community", expertise: "Yoga & Mindfulness" }
              ].map((founder, index) => (
                <Card key={index} className="hover-lift shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4"></div>
                    <h3 className="font-bold mb-1">{founder.name}</h3>
                    <p className="text-sm text-primary mb-2">{founder.role}</p>
                    <p className="text-sm text-muted-foreground">{founder.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
