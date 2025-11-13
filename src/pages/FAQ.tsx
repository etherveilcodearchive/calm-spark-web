import Hero from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-home.jpg";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Mindful Yogi?",
          answer: "Mindful Yogi is Pakistan's first AI-driven wellness ecosystem, offering yoga classes, meditation sessions, therapy services, and AI-powered wellness coaching through our platform and mobile app."
        },
        {
          question: "Who can join Mindful Yogi?",
          answer: "Anyone interested in wellness! We welcome beginners to advanced practitioners, people of all ages and backgrounds. Our programs are designed to be inclusive and accessible to everyone."
        },
        {
          question: "Do I need prior experience in yoga or meditation?",
          answer: "No prior experience is necessary! We offer classes for all levels, from complete beginners to advanced practitioners. Our instructors will guide you every step of the way."
        }
      ]
    },
    {
      category: "Membership & Pricing",
      questions: [
        {
          question: "What membership plans are available?",
          answer: "We offer three plans: Basic (PKR 2,999/month), Premium (PKR 5,999/month), and Elite (PKR 9,999/month). Each plan includes different levels of access to our services. Visit our Services page for detailed comparisons."
        },
        {
          question: "Can I try before I buy?",
          answer: "Yes! We offer a 7-day free trial for new members. You can explore all features of our Basic plan during this period with no credit card required."
        },
        {
          question: "How do I cancel my membership?",
          answer: "You can cancel anytime from your account settings. There are no cancellation fees, and you'll retain access until the end of your current billing period."
        },
        {
          question: "Are there any discounts available?",
          answer: "Yes! We offer student discounts (20% off), annual payment discounts (2 months free), and corporate packages for organizations. Contact us for more details."
        }
      ]
    },
    {
      category: "Classes & Schedule",
      questions: [
        {
          question: "What types of classes are offered?",
          answer: "We offer Hatha, Vinyasa, and Ashtanga yoga classes, along with guided meditation, breathwork sessions, and specialized workshops. All classes are led by certified instructors."
        },
        {
          question: "Are classes live or recorded?",
          answer: "Both! We have live sessions daily at different times, plus an extensive on-demand library you can access anytime."
        },
        {
          question: "What is the class schedule?",
          answer: "Live classes run morning (6-9 AM), afternoon (12-3 PM), and evening (6-9 PM) Pakistan time. Check your member dashboard for the complete schedule."
        },
        {
          question: "How long are the sessions?",
          answer: "Most classes are 60 minutes, with some shorter 30-minute express sessions and longer 90-minute deep dive workshops."
        }
      ]
    },
    {
      category: "Therapy Services",
      questions: [
        {
          question: "Are your therapists licensed?",
          answer: "Yes, all our therapists are licensed clinical psychologists with experience in various therapeutic approaches including CBT, mindfulness-based therapy, and trauma-informed care."
        },
        {
          question: "Is therapy confidential?",
          answer: "Absolutely. All therapy sessions are completely confidential and protected under professional ethics guidelines. Your privacy and trust are our top priorities."
        },
        {
          question: "How do I book a therapy session?",
          answer: "Members can book sessions through their portal dashboard or the registrations page. We'll match you with a suitable therapist based on your needs and preferences."
        },
        {
          question: "Can I choose my therapist?",
          answer: "Yes! You can view therapist profiles and select the one you feel most comfortable with. You can also request to change therapists if needed."
        }
      ]
    },
    {
      category: "AI Assistant (Corra)",
      questions: [
        {
          question: "What is Corra?",
          answer: "Corra is our AI wellness assistant, available 24/7 to provide personalized wellness guidance, answer questions, track your progress, and offer support between sessions."
        },
        {
          question: "Can Corra replace therapy?",
          answer: "No. While Corra provides valuable support and resources, it's not a substitute for professional therapy. For mental health concerns, we always recommend speaking with our licensed therapists."
        },
        {
          question: "How does Corra personalize recommendations?",
          answer: "Corra learns from your interactions, preferences, and progress tracking to provide tailored wellness suggestions, class recommendations, and motivational support."
        },
        {
          question: "Is my data shared with Corra secure?",
          answer: "Yes. All data is encrypted and stored securely. Corra operates within strict privacy protocols, and your information is never shared with third parties."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What devices can I use?",
          answer: "Our platform works on desktop computers, laptops, tablets, and smartphones. We have dedicated apps for iOS and Android, plus a responsive web interface."
        },
        {
          question: "What internet speed do I need?",
          answer: "For smooth video streaming, we recommend at least 5 Mbps. Lower speeds may work for audio-only sessions or on-demand content."
        },
        {
          question: "I'm having technical issues. What should I do?",
          answer: "Contact our support team via the Contact page, email support@mindfulfyogi.pk, or chat with us directly in your member portal. We typically respond within 2 hours."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Mindful Yogi"
        backgroundImage={heroImage}
        height="small"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Search Bar */}
          <Card className="shadow-soft mb-12 animate-fade-in">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for questions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, index) => (
                <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem key={qIndex} value={`${category.category}-${qIndex}`} className="border rounded-lg px-6 shadow-soft">
                        <AccordionTrigger className="text-left hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <Card className="shadow-soft">
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    No questions found matching "{searchQuery}". Try a different search term or{" "}
                    <a href="/contact" className="text-primary hover:underline">contact us</a> directly.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact CTA */}
          <Card className="shadow-soft mt-12 gradient-calm animate-fade-in">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help you
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact" className="inline-block">
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth">
                    Contact Support
                  </button>
                </a>
                <a href="/assistant" className="inline-block">
                  <button className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-smooth">
                    Chat with Corra AI
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
