import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Trophy, Star, Target, TrendingUp, Gift } from "lucide-react";

const Rewards = () => {
  const stats = {
    totalPoints: 2450,
    level: "Advanced",
    nextLevel: 3000,
    badges: 12
  };

  const earnedBadges = [
    { name: "Early Bird", description: "Completed 10 morning sessions", icon: "🌅" },
    { name: "Consistency King", description: "15-day streak", icon: "🔥" },
    { name: "Mindful Master", description: "Completed 100 meditation minutes", icon: "🧘" },
    { name: "Community Champion", description: "Participated in 5 events", icon: "🤝" },
  ];

  const availableBadges = [
    { name: "Wellness Warrior", requirement: "Complete 50 sessions", progress: 68, icon: "⚔️" },
    { name: "Zen Master", requirement: "500 meditation minutes", progress: 84, icon: "🙏" },
    { name: "Social Butterfly", requirement: "Attend 10 community events", progress: 50, icon: "🦋" },
  ];

  const recentRewards = [
    { type: "Points", amount: "+50", description: "Completed Hatha Yoga session", time: "2 hours ago" },
    { type: "Badge", amount: "🔥", description: "Earned Consistency King badge", time: "Yesterday" },
    { type: "Points", amount: "+100", description: "Completed Mindfulness course", time: "2 days ago" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Rewards & Achievements</h1>
        <p className="text-muted-foreground">
          Track your progress and celebrate your wellness milestones
        </p>
      </div>

      {/* Points & Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Wellness Points
            </CardTitle>
            <CardDescription>Earn points for every activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-4">{stats.totalPoints}</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress to {stats.nextLevel} ({stats.level} Level)</span>
                <span className="font-medium">{Math.round((stats.totalPoints / stats.nextLevel) * 100)}%</span>
              </div>
              <Progress value={(stats.totalPoints / stats.nextLevel) * 100} />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Badges Earned
            </CardTitle>
            <CardDescription>Your collection of achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-4">{stats.badges}</div>
            <p className="text-sm text-muted-foreground">
              Keep completing challenges to unlock more badges and rewards
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          Your Badges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnedBadges.map((badge, index) => (
            <Card key={index} className="shadow-soft hover-lift text-center">
              <CardContent className="pt-8">
                <div className="text-6xl mb-4">{badge.icon}</div>
                <h3 className="font-bold mb-2">{badge.name}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress Badges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Badges In Progress
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {availableBadges.map((badge, index) => (
            <Card key={index} className="shadow-soft hover-lift">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">{badge.icon}</div>
                  <h3 className="font-bold mb-1">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground">{badge.requirement}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium text-primary">{badge.progress}%</span>
                  </div>
                  <Progress value={badge.progress} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Rewards */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Recent Rewards
          </CardTitle>
          <CardDescription>Your latest achievements and points</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentRewards.map((reward, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                {reward.type === "Badge" ? reward.amount : <Gift className="h-6 w-6 text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">{reward.type}</Badge>
                  {reward.type === "Points" && <span className="font-medium text-primary">{reward.amount}</span>}
                </div>
                <p className="text-sm">{reward.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{reward.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Leaderboard Preview */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Community Leaderboard
          </CardTitle>
          <CardDescription>See how you rank among other members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { rank: 1, name: "You", points: 2450, badge: "🏆" },
              { rank: 2, name: "Sarah K.", points: 2380, badge: "🥈" },
              { rank: 3, name: "Ali R.", points: 2250, badge: "🥉" },
            ].map((entry) => (
              <div key={entry.rank} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                <div className="text-2xl">{entry.badge}</div>
                <div className="w-8 text-center font-medium">#{entry.rank}</div>
                <div className="flex-1 font-medium">{entry.name}</div>
                <div className="text-primary font-bold">{entry.points} pts</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rewards;
