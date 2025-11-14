import { useState } from "react";
import { Search, Gift, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";
import StatsCard from "@/components/admin/StatsCard";

const AdminRewards = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const [rewards] = useState([
    { id: 1, user: "John Doe", points: 1250, tier: "Gold", lastActivity: "2 days ago" },
    { id: 2, user: "Jane Smith", points: 850, tier: "Silver", lastActivity: "1 week ago" },
    { id: 3, user: "Ali Khan", points: 2100, tier: "Platinum", lastActivity: "Today" },
    { id: 4, user: "Sara Ahmed", points: 450, tier: "Bronze", lastActivity: "3 days ago" },
  ]);

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

  const handleDelete = (reward: any) => {
    toast({
      title: "Remove Reward",
      description: `Reward for ${reward.user} removed successfully`,
      variant: "destructive",
    });
  };

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
          value="24,580"
          icon={Gift}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Rewards"
          value="156"
          icon={Award}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Redemption Rate"
          value="68%"
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
