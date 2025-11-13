import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-home.jpg";

const Registrations = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="Register Now"
        subtitle="Start your wellness journey today"
        backgroundImage={heroImage}
        height="small"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="membership" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="membership">Membership</TabsTrigger>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="therapy">Therapy</TabsTrigger>
            </TabsList>

            {/* Membership Registration */}
            <TabsContent value="membership">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Join Mindful Yogi</CardTitle>
                  <CardDescription>
                    Choose your membership plan and start your wellness journey
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan">Membership Plan</Label>
                    <Select>
                      <SelectTrigger id="plan">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - PKR 2,999/month</SelectItem>
                        <SelectItem value="premium">Premium - PKR 5,999/month</SelectItem>
                        <SelectItem value="elite">Elite - PKR 9,999/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" size="lg">
                    Complete Registration
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Class Registration */}
            <TabsContent value="classes">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Register for Classes</CardTitle>
                  <CardDescription>
                    Book your spot in our yoga and meditation sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailClass">Email</Label>
                    <Input id="emailClass" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="classType">Class Type</Label>
                    <Select>
                      <SelectTrigger id="classType">
                        <SelectValue placeholder="Select class type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hatha">Hatha Yoga</SelectItem>
                        <SelectItem value="vinyasa">Vinyasa Flow</SelectItem>
                        <SelectItem value="ashtanga">Ashtanga Yoga</SelectItem>
                        <SelectItem value="meditation">Meditation</SelectItem>
                        <SelectItem value="breathwork">Breathwork</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Experience Level</Label>
                    <Select>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schedule">Preferred Schedule</Label>
                    <Select>
                      <SelectTrigger id="schedule">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (6:00 AM - 9:00 AM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" size="lg">
                    Register for Class
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Therapy Session Registration */}
            <TabsContent value="therapy">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Book Therapy Session</CardTitle>
                  <CardDescription>
                    Schedule a confidential session with our licensed therapists
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="therapyFirstName">First Name</Label>
                      <Input id="therapyFirstName" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="therapyLastName">Last Name</Label>
                      <Input id="therapyLastName" placeholder="Last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="therapyEmail">Email</Label>
                    <Input id="therapyEmail" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="therapyPhone">Phone Number</Label>
                    <Input id="therapyPhone" type="tel" placeholder="+92 300 1234567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="concern">Primary Concern</Label>
                    <Select>
                      <SelectTrigger id="concern">
                        <SelectValue placeholder="Select primary concern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anxiety">Anxiety</SelectItem>
                        <SelectItem value="depression">Depression</SelectItem>
                        <SelectItem value="stress">Stress Management</SelectItem>
                        <SelectItem value="relationships">Relationship Issues</SelectItem>
                        <SelectItem value="trauma">Trauma</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Share any specific concerns or preferences..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Confidentiality Notice:</strong> All information shared is strictly confidential 
                      and protected under professional ethics guidelines.
                    </p>
                  </div>

                  <Button className="w-full" size="lg">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Registrations;
