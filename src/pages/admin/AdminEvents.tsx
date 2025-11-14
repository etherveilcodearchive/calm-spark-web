import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";
import api from "@/lib/api";

const AdminEvents = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get('/events');
      setEvents(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load events",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: "name", label: "Event Name" },
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "capacity", label: "Capacity" },
    { key: "registered", label: "Registered" },
  ];

  const handleAdd = () => {
    toast({
      title: "Add Event",
      description: "Event creation form will open here",
    });
  };

  const handleEdit = (event: any) => {
    toast({
      title: "Edit Event",
      description: `Editing ${event.name}`,
    });
  };

  const handleDelete = async (event: any) => {
    try {
      await api.delete(`/events/${event.id}`);
      toast({
        title: "Delete Event",
        description: `${event.name} deleted successfully`,
      });
      fetchEvents();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event",
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
          <h1 className="text-3xl font-serif text-foreground">Events</h1>
          <p className="text-muted-foreground">Manage events and workshops</p>
        </div>
      </div>

      <DataTable
        data={events}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search events..."
      />
    </div>
  );
};

export default AdminEvents;
