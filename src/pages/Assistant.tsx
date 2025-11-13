import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles, MessageCircle, Zap, Shield } from "lucide-react";
import { useState } from "react";
import aiAssistantImage from "@/assets/ai-assistant.jpg";

const Assistant = () => {
  const [message, setMessage] = useState("");

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Availability",
      description: "Get wellness support anytime, anywhere"
    },
    {
      icon: Sparkles,
      title: "Personalized Guidance",
      description: "Tailored recommendations based on your journey"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Quick answers to your wellness questions"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are secure and confidential"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aiAssistantImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm animate-fade-in">
            <Bot className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">AI-Powered Wellness Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Meet Corra
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your compassionate AI companion for wellness guidance, support, and personalized insights
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Corra Can Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI, Corra provides intelligent wellness support tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chat Interface (Placeholder) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-glow animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Chat with Corra</CardTitle>
              <CardDescription>
                Ask me anything about wellness, get personalized recommendations, or just chat!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Sample Messages */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-soft flex-1">
                    <p className="text-sm">
                      Hello! I'm Corra, your AI wellness companion. I'm here to support your journey to better health 
                      and mindfulness. How can I help you today?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/10 p-4 rounded-lg max-w-[70%]">
                    <p className="text-sm">Hi Corra! I'm new to meditation. Where should I start?</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-soft flex-1">
                    <p className="text-sm">
                      Welcome! That's wonderful that you're starting your meditation journey. For beginners, I recommend 
                      our "Introduction to Mindfulness" series. It starts with just 5-minute guided sessions focusing on 
                      breath awareness. Would you like me to schedule your first session?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is a preview interface. Full Corra functionality will be available to members 
                  after login. <a href="/login" className="text-primary hover:underline">Sign in</a> or{" "}
                  <a href="/registrations" className="text-primary hover:underline">register</a> to access all features.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Members Use Corra</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Daily Check-ins",
                description: "Track your mood and receive personalized wellness recommendations"
              },
              {
                title: "Class Recommendations",
                description: "Get suggestions for classes based on your goals and schedule"
              },
              {
                title: "Progress Tracking",
                description: "Monitor your wellness journey with AI-generated insights"
              },
              {
                title: "Quick Guidance",
                description: "Get instant answers to wellness questions anytime"
              },
              {
                title: "Resource Library",
                description: "Access curated articles, videos, and exercises"
              },
              {
                title: "Goal Setting",
                description: "Set and track wellness goals with AI support"
              }
            ].map((useCase, index) => (
              <Card key={index} className="hover-lift shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Conversation?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join Mindful Yogi today and get unlimited access to Corra's AI-powered wellness support
          </p>
          <a href="/registrations">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Get Started Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Assistant;
