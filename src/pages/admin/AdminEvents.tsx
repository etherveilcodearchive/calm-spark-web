import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";

const AdminEvents = () => {
  const { toast } = useToast();

  // Mock data
  const [events] = useState([
    { id: 1, name: "Morning Yoga Session", date: "2025-11-20", time: "10:00 AM", capacity: 20, registered: 15 },
    { id: 2, name: "Mindfulness Workshop", date: "2025-11-22", time: "2:00 PM", capacity: 30, registered: 24 },
    { id: 3, name: "Meditation Retreat", date: "2025-11-25", time: "9:00 AM", capacity: 15, registered: 8 },
    { id: 4, name: "Nutrition Seminar", date: "2025-11-28", time: "3:00 PM", capacity: 25, registered: 18 },
  ]);

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

  const handleDelete = (event: any) => {
    toast({
      title: "Delete Event",
      description: `${event.name} deleted successfully`,
      variant: "destructive",
    });
  };

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
