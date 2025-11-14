import { Users, Calendar, BookOpen, Gift } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Events This Month"
          value="42"
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Active Bookings"
          value="86"
          icon={BookOpen}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard
          title="Rewards Given"
          value="234"
          icon={Gift}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-xl font-serif mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: "John Doe", action: "registered for Yoga Class", time: "2 hours ago" },
              { user: "Jane Smith", action: "completed Meditation Session", time: "4 hours ago" },
              { user: "Ali Khan", action: "booked Therapy Consultation", time: "6 hours ago" },
              { user: "Sara Ahmed", action: "earned 50 reward points", time: "1 day ago" },
            ].map((activity, index) => (
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
            {[
              { name: "Morning Yoga Session", date: "Nov 20, 2025", attendees: 15 },
              { name: "Mindfulness Workshop", date: "Nov 22, 2025", attendees: 24 },
              { name: "Meditation Retreat", date: "Nov 25, 2025", attendees: 8 },
            ].map((event, index) => (
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
