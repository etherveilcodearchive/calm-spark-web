import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";
import api from "@/lib/api";

const AdminServices = () => {
  const { toast } = useToast();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await api.get('/services');
      setServices(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load services",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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

  const handleDelete = async (service: any) => {
    try {
      await api.delete(`/services/${service.id}`);
      toast({
        title: "Delete Service",
        description: `${service.name} deleted successfully`,
      });
      fetchServices();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete service",
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
