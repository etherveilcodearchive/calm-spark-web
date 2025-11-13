import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="We're here to help you on your wellness journey"
        backgroundImage={heroImage}
        height="small"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? We'd love to hear from you. Our team is always ready to assist you 
                  with any inquiries about our services, memberships, or wellness programs.
                </p>
              </div>

              {/* Contact Cards */}
              <Card className="shadow-soft hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-1">Send us an email anytime</p>
                      <a href="mailto:hello@mindfulfyogi.pk" className="text-primary hover:underline">
                        hello@mindfulfyogi.pk
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-1">Mon-Fri from 9am to 6pm PKT</p>
                      <a href="tel:+923001234567" className="text-primary hover:underline">
                        +92 300 1234567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Wellness Street<br />
                        Clifton, Karachi<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary transition-smooth flex items-center justify-center group">
                    <Facebook className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary transition-smooth flex items-center justify-center group">
                    <Instagram className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary transition-smooth flex items-center justify-center group">
                    <Twitter className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary transition-smooth flex items-center justify-center group">
                    <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
            <Card className="shadow-soft overflow-hidden animate-fade-in">
              <div className="w-full h-[400px] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder - Clifton, Karachi, Pakistan</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
