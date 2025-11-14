import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";

const AdminServices = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const [services] = useState([
    { id: 1, name: "Yoga Classes", category: "Fitness", price: "PKR 5,000/month", status: "Active" },
    { id: 2, name: "Meditation Sessions", category: "Wellness", price: "PKR 3,000/month", status: "Active" },
    { id: 3, name: "Therapy Consultation", category: "Mental Health", price: "PKR 8,000/session", status: "Active" },
    { id: 4, name: "Nutrition Counseling", category: "Health", price: "PKR 6,000/month", status: "Inactive" },
  ]);

  const columns = [
    { key: "name", label: "Service Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "status", label: "Status" },
  ];

  const handleAdd = () => {
    toast({
      title: "Add Service",
      description: "Service creation form will open here",
    });
  };

  const handleEdit = (service: any) => {
    toast({
      title: "Edit Service",
      description: `Editing ${service.name}`,
    });
  };

  const handleDelete = (service: any) => {
    toast({
      title: "Delete Service",
      description: `${service.name} deleted successfully`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Services</h1>
          <p className="text-muted-foreground">Manage wellness services and offerings</p>
        </div>
      </div>

      <DataTable
        data={services}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search services..."
      />
    </div>
  );
};

export default AdminServices;
