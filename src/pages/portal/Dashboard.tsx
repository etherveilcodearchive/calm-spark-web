import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp, Calendar, Award, Heart, Brain, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here's your wellness overview for today
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-lift shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Sessions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +20% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meditation Minutes</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">420</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">15 days</div>
            <p className="text-xs text-muted-foreground">
              Keep it up!
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wellness Points</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">2,450</div>
            <p className="text-xs text-muted-foreground">
              Level: Advanced
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Goals */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Weekly Goals</CardTitle>
            <CardDescription>Your progress this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Yoga Sessions (5/7)</span>
                <span className="text-primary font-medium">71%</span>
              </div>
              <Progress value={71} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Meditation (300/500 min)</span>
                <span className="text-primary font-medium">60%</span>
              </div>
              <Progress value={60} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Daily Check-ins (6/7)</span>
                <span className="text-primary font-medium">86%</span>
              </div>
              <Progress value={86} />
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Sessions
            </CardTitle>
            <CardDescription>Your scheduled classes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
              <div className="text-center">
                <div className="text-sm font-medium">Today</div>
                <div className="text-xs text-muted-foreground">6:00 PM</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Vinyasa Flow Yoga</h4>
                <p className="text-sm text-muted-foreground">With Instructor Sarah</p>
              </div>
              <Button size="sm">Join</Button>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
              <div className="text-center">
                <div className="text-sm font-medium">Tomorrow</div>
                <div className="text-xs text-muted-foreground">7:00 AM</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Morning Meditation</h4>
                <p className="text-sm text-muted-foreground">With Instructor Ali</p>
              </div>
              <Button size="sm" variant="outline">Details</Button>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
              <div className="text-center">
                <div className="text-sm font-medium">Dec 5</div>
                <div className="text-xs text-muted-foreground">4:00 PM</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Breathwork Workshop</h4>
                <p className="text-sm text-muted-foreground">Special Event</p>
              </div>
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your wellness journey highlights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">Completed <strong>Hatha Yoga</strong> session</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">Earned <strong>Consistency Badge</strong></p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">Started <strong>Mindfulness Course</strong></p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">Joined <strong>Community Group</strong></p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>What would you like to do today?</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-24 flex flex-col gap-2">
              <Activity className="h-6 w-6" />
              <span className="text-sm">Start Session</span>
            </Button>
            <Link to="/portal/tracker" className="contents">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Brain className="h-6 w-6" />
                <span className="text-sm">Log Wellness</span>
              </Button>
            </Link>
            <Link to="/portal/courses" className="contents">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Browse Courses</span>
              </Button>
            </Link>
            <Button variant="outline" className="h-24 flex flex-col gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Community</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
