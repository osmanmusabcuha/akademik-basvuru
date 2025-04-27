import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserTable = ({ data, onClick }) => {
  data = data.slice().sort((a, b) => a.id - b.id);
  console.log(data);
  return (
    <>
      <Table className="w-full bg-white !rounded-3xl">
        <TableHeader>
          <TableRow className="bg-green-300 text-green-800 p-4 rounded shadow">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>İsim</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow
              onClick={() => onClick(user.id)}
              key={user.id}
              className="hover:bg-gray-100"
            >
              <TableCell className="font-medium text-gray-900">
                {user.id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
