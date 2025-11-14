import { useState, useEffect } from "react";
import { Gift, Award, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";
import StatsCard from "@/components/admin/StatsCard";
import api from "@/lib/api";

const AdminRewards = () => {
  const { toast } = useToast();
  const [rewards, setRewards] = useState([]);
  const [stats, setStats] = useState({
    totalPoints: 0,
    activeRewards: 0,
    redemptionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRewards();
    fetchStats();
  }, []);

  const fetchRewards = async () => {
    try {
      const response = await api.get('/rewards');
      setRewards(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load rewards",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get('/rewards/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching reward stats:', error);
    }
  };

  const columns = [
    { key: "user", label: "User" },
    { key: "points", label: "Points" },
    { key: "tier", label: "Tier" },
    { key: "lastActivity", label: "Last Activity" },
  ];

  const handleAdd = () => {
    toast({
      title: "Assign Reward",
      description: "Reward assignment form will open here",
    });
  };

  const handleEdit = (reward: any) => {
    toast({
      title: "Edit Reward",
      description: `Editing reward for ${reward.user}`,
    });
  };

  const handleDelete = async (reward: any) => {
    try {
      await api.delete(`/rewards/${reward.id}`);
      toast({
        title: "Remove Reward",
        description: `Reward for ${reward.user} removed successfully`,
      });
      fetchRewards();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove reward",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Rewards</h1>
          <p className="text-muted-foreground">Track and manage user rewards and loyalty points</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Points Distributed"
          value={stats.totalPoints.toString()}
          icon={Gift}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Rewards"
          value={stats.activeRewards.toString()}
          icon={Award}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Redemption Rate"
          value={`${stats.redemptionRate}%`}
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <DataTable
        data={rewards}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search rewards..."
        addButtonText="Assign Reward"
      />
    </div>
  );
};

export default AdminRewards;
