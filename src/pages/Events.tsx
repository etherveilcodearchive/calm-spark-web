import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Mindfulness Meditation Retreat",
      date: "December 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Murree Hills, Pakistan",
      attendees: 45,
      maxAttendees: 60,
      price: "PKR 15,000",
      category: "Retreat",
      description: "A transformative 3-day retreat in the serene mountains, featuring guided meditation, yoga, and mindfulness workshops."
    },
    {
      id: 2,
      title: "Introduction to Yoga Workshop",
      date: "December 5, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Mindful Yogi Studio, Karachi",
      attendees: 28,
      maxAttendees: 30,
      price: "PKR 500",
      category: "Workshop",
      description: "Perfect for beginners! Learn the fundamentals of yoga, proper alignment, and breathing techniques."
    },
    {
      id: 3,
      title: "Mental Health Awareness Seminar",
      date: "December 10, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      attendees: 152,
      maxAttendees: 200,
      price: "Free",
      category: "Seminar",
      description: "Join mental health professionals discussing stress management, emotional wellness, and available support resources."
    },
    {
      id: 4,
      title: "Advanced Pranayama Masterclass",
      date: "December 20, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Mindful Yogi Studio, Lahore",
      attendees: 18,
      maxAttendees: 25,
      price: "PKR 1,500",
      category: "Masterclass",
      description: "Deep dive into advanced breathing techniques with internationally certified instructors."
    },
    {
      id: 5,
      title: "New Year Wellness Celebration",
      date: "January 1, 2025",
      time: "7:00 AM - 12:00 PM",
      location: "Beach Wellness Park, Karachi",
      attendees: 89,
      maxAttendees: 150,
      price: "PKR 800",
      category: "Event",
      description: "Welcome the new year with sunrise yoga, group meditation, healthy breakfast, and community bonding."
    },
    {
      id: 6,
      title: "Nutrition & Wellness Workshop",
      date: "December 12, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 67,
      maxAttendees: 100,
      price: "PKR 500",
      category: "Workshop",
      description: "Learn about holistic nutrition, meal planning, and how diet impacts mental and physical wellness."
    }
  ];

  const pastEvents = [
    { title: "Summer Yoga Festival", date: "June 2024", attendees: 200 },
    { title: "Mindfulness for Professionals", date: "August 2024", attendees: 85 },
    { title: "Community Wellness Day", date: "September 2024", attendees: 150 }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Events & Workshops"
        subtitle="Join our vibrant wellness community"
        backgroundImage={heroImage}
        height="medium"
      />

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Discover transformative experiences and connect with like-minded individuals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className="hover-lift shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{event.category}</Badge>
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      {event.attendees} / {event.maxAttendees} registered
                    </div>
                  </div>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-smooth"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>

                  <Link to="/registrations">
                    <Button className="w-full">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground">
              Celebrating memorable moments from our wellness community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover-lift shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4"></div>
                  <h3 className="font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                  <p className="text-sm text-primary">{event.attendees} attendees</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Host an Event?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Partner with Mindful Yogi to organize wellness events and workshops for your community
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
