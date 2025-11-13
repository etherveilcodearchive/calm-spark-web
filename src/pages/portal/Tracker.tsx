import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Heart, Brain, Smile, Moon, TrendingUp } from "lucide-react";

const Tracker = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Wellness Tracker</h1>
        <p className="text-muted-foreground">
          Track your daily wellness metrics and see your progress over time
        </p>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        {/* Today Tab */}
        <TabsContent value="today" className="space-y-6">
          {/* Daily Check-in */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Daily Check-in</CardTitle>
              <CardDescription>How are you feeling today?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mood */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Smile className="h-5 w-5 text-primary" />
                    Mood
                  </Label>
                  <span className="text-sm text-muted-foreground">Happy</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>

              {/* Energy Level */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Energy Level
                  </Label>
                  <span className="text-sm text-muted-foreground">High</span>
                </div>
                <Slider defaultValue={[80]} max={100} step={1} />
              </div>

              {/* Stress Level */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Stress Level
                  </Label>
                  <span className="text-sm text-muted-foreground">Low</span>
                </div>
                <Slider defaultValue={[25]} max={100} step={1} />
              </div>

              {/* Sleep Quality */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-primary" />
                    Sleep Quality
                  </Label>
                  <span className="text-sm text-muted-foreground">7 hours</span>
                </div>
                <Slider defaultValue={[70]} max={100} step={1} />
              </div>

              {/* Notes */}
              <div className="space-y-3">
                <Label>Daily Notes (Optional)</Label>
                <Textarea 
                  placeholder="How did you feel today? Any insights or reflections..."
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full">Save Today's Check-in</Button>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-soft hover-lift">
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Sessions Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2</div>
                <p className="text-sm text-muted-foreground mt-1">
                  1 Yoga, 1 Meditation
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-lift">
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  Active Minutes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">85</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Goal: 60 minutes
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-lift">
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Consistency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">15</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Day streak
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Week Tab */}
        <TabsContent value="week" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Weekly Summary</CardTitle>
              <CardDescription>Your wellness trends this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Weekly chart placeholder</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Mood</p>
                  <p className="text-2xl font-bold text-primary">7.8/10</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Energy</p>
                  <p className="text-2xl font-bold text-primary">8.2/10</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Sleep</p>
                  <p className="text-2xl font-bold text-primary">7.5 hrs</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sessions</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Month Tab */}
        <TabsContent value="month" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Monthly Summary</CardTitle>
              <CardDescription>Your progress this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Monthly chart placeholder</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Sessions</p>
                  <p className="text-2xl font-bold text-primary">48</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Days</p>
                  <p className="text-2xl font-bold text-primary">26/30</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Minutes</p>
                  <p className="text-2xl font-bold text-primary">1,450</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Points Earned</p>
                  <p className="text-2xl font-bold text-primary">2,450</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tracker;
