import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DataTable from "@/components/admin/DataTable";

const AdminUsers = () => {
  const { toast } = useToast();

  // Mock data
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Member", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Premium", status: "Active" },
    { id: 3, name: "Ali Khan", email: "ali@example.com", role: "Member", status: "Inactive" },
    { id: 4, name: "Sara Ahmed", email: "sara@example.com", role: "Premium", status: "Active" },
  ]);

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ];

  const handleAdd = () => {
    toast({
      title: "Add User",
      description: "User creation form will open here",
    });
  };

  const handleEdit = (user: any) => {
    toast({
      title: "Edit User",
      description: `Editing ${user.name}`,
    });
  };

  const handleDelete = (user: any) => {
    toast({
      title: "Delete User",
      description: `${user.name} deleted successfully`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
      </div>

      <DataTable
        data={users}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search users..."
      />
    </div>
  );
};

export default AdminUsers;
