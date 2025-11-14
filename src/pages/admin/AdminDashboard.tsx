import { useState, useEffect } from "react";
import { Users, Calendar, BookOpen, Gift } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import api from "@/lib/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    eventsThisMonth: 0,
    activeBookings: 0,
    rewardsGiven: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, activityRes, eventsRes] = await Promise.all([
          api.get('/dashboard/stats'),
          api.get('/dashboard/activity'),
          api.get('/dashboard/upcoming-events'),
        ]);
        setStats(statsRes.data);
        setRecentActivity(activityRes.data);
        setUpcomingEvents(eventsRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={stats.totalUsers.toString()}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Events This Month"
          value={stats.eventsThisMonth.toString()}
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Active Bookings"
          value={stats.activeBookings.toString()}
          icon={BookOpen}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard
          title="Rewards Given"
          value={stats.rewardsGiven.toString()}
          icon={Gift}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-xl font-serif mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity: any, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <p className="font-medium text-foreground">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-xl font-serif mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event: any, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <p className="font-medium text-foreground">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <span className="text-sm text-muted-foreground">{event.attendees} attendees</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
