import UserTable from "../../components/user-table";
import { useAuthStore } from "../../store/auth-store";
import axios from "axios";
import { useEffect, useState } from "react";
import RoleDialog from "../../components/manage-dialog";
import SelectComp from "../../components/select";

const roles = [
  { id: 1, value: "admin", label: "Admin" },
  { id: 3, value: "juri", label: "Jüri" },
  { id: 4, value: "yonetici", label: "Yönetici" },
  { id: 2, value: "aday", label: "Aday" },
];

const ManageRoles = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const { token } = useAuthStore();

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleClick = (id) => {
    console.log("User ID:", id);
    setSelectedUserId(id);
    setOpen(!open);
  };

  const handleSelectRole = (value) => {
    setSelectedRole(value);
    console.log("Selected Role:", value);
  };

  const handleChangeRole = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/role/${selectedUserId}`,
        {
          roleName: selectedRole,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Role updated successfully:", response.data);
      setOpen(false);
      // İstersen kullanıcı listesini güncelle
      await getUsers();
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  useEffect(() => {
    getUsers();
  }, []);

  console.log(selectedRole);
  return (
    <div className="container mx-auto mt-10">
      <UserTable data={users} onClick={(id) => handleClick(id)} />
      <div className="flex justify-end mt-4">
        <RoleDialog title="Role Değiştirme" onOpenChange={setOpen} open={open}>
          <>
            <div class="bg-white max-w-sm ">
              <p class="text-md font-semibold text-gray-800">
                ID: <span class="text-gray-600">{selectedUser?.id}</span>
              </p>
              <p class="text-md font-semibold text-gray-800">
                İsim: <span class="text-gray-600">{selectedUser?.name}</span>
              </p>
              <p class="text-md font-semibold text-gray-800">
                E-posta:{" "}
                <span class="text-gray-600">{selectedUser?.email}</span>
              </p>
              <p class="text-md font-semibold text-gray-800">
                Role: <span class="text-gray-600">{selectedUser?.role}</span>
              </p>
            </div>
            <hr />
            <form className="flex flex-col gap-4" onSubmit={handleChangeRole}>
              <div className="flex flex-col">
                <label
                  htmlFor="role"
                  className="text-sm font-medium text-gray-700"
                >
                  Rol Seçin
                </label>

                <SelectComp
                  placeholder="rol seçin"
                  options={roles}
                  value={selectedRole}
                  onChange={handleSelectRole}
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Değiştir
              </button>
            </form>
          </>
        </RoleDialog>
      </div>
    </div>
  );
};

export default ManageRoles;
