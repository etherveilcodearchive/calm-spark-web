import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Activity, Brain, Heart, Users, Zap, Calendar, Video, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Services = () => {
  const services = [
    {
      title: "Yoga Classes",
      description: "Traditional and contemporary yoga practices for all levels",
      icon: Activity,
      price: "PKR 2,500/month",
      features: [
        "Daily live sessions (morning & evening)",
        "Beginner to advanced levels",
        "Hatha, Vinyasa, and Ashtanga styles",
        "Certified instructors",
        "On-demand video library"
      ]
    },
    {
      title: "Meditation Sessions",
      description: "Guided meditation for stress relief and mental clarity",
      icon: Brain,
      price: "PKR 1,500/month",
      features: [
        "Morning and evening sessions",
        "Mindfulness practices",
        "Breathing techniques",
        "Sleep meditation",
        "Stress management programs"
      ]
    },
    {
      title: "Wellness Therapy",
      description: "Professional mental health support from licensed therapists",
      icon: Heart,
      price: "PKR 3,500/session",
      features: [
        "Licensed clinical psychologists",
        "Confidential 1-on-1 sessions",
        "Anxiety & depression support",
        "Relationship counseling",
        "Trauma-informed care"
      ]
    },
    {
      title: "Group Workshops",
      description: "Interactive wellness workshops and community events",
      icon: Users,
      price: "PKR 500 - 1,500",
      features: [
        "Monthly themed workshops",
        "Wellness retreats",
        "Nutrition seminars",
        "Mindfulness training",
        "Community building activities"
      ]
    },
    {
      title: "AI Wellness Coaching",
      description: "Personalized guidance from Corra, your AI wellness companion",
      icon: Zap,
      price: "Included with membership",
      features: [
        "24/7 AI support via Corra",
        "Personalized wellness plans",
        "Progress tracking & insights",
        "Mood analysis",
        "Resource recommendations"
      ]
    },
    {
      title: "Corporate Wellness",
      description: "Tailored wellness programs for organizations",
      icon: Calendar,
      price: "Custom pricing",
      features: [
        "On-site or virtual sessions",
        "Employee wellness assessments",
        "Stress management programs",
        "Team building activities",
        "Quarterly wellness reports"
      ]
    },
    {
      title: "Virtual Consultations",
      description: "One-on-one sessions with wellness experts",
      icon: Video,
      price: "PKR 2,000/session",
      features: [
        "Video consultations",
        "Personalized wellness plans",
        "Nutrition guidance",
        "Fitness assessments",
        "Follow-up support"
      ]
    },
    {
      title: "Community Support",
      description: "Connect with fellow wellness enthusiasts",
      icon: MessageCircle,
      price: "Free with membership",
      features: [
        "Private community forum",
        "Peer support groups",
        "Member meetups",
        "Wellness challenges",
        "Success story sharing"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Services"
        subtitle="Comprehensive wellness solutions for mind, body, and soul"
        ctaText="Get Started Today"
        ctaLink="/registrations"
        backgroundImage={heroImage}
        height="medium"
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of wellness services, each designed to support your unique journey 
              toward better health and happiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Plans</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "PKR 2,999",
                period: "/month",
                features: [
                  "Unlimited yoga classes",
                  "Daily meditation sessions",
                  "AI wellness coaching",
                  "Community forum access",
                  "On-demand content library"
                ]
              },
              {
                name: "Premium",
                price: "PKR 5,999",
                period: "/month",
                features: [
                  "Everything in Basic",
                  "2 therapy sessions/month",
                  "Personal wellness tracker",
                  "Priority support",
                  "Workshop discounts",
                  "Monthly 1-on-1 consultation"
                ],
                popular: true
              },
              {
                name: "Elite",
                price: "PKR 9,999",
                period: "/month",
                features: [
                  "Everything in Premium",
                  "4 therapy sessions/month",
                  "Customized wellness plan",
                  "Unlimited consultations",
                  "Free workshop access",
                  "VIP event invitations"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-soft hover-lift bg-card ${
                  plan.popular ? "ring-2 ring-primary relative" : ""
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
