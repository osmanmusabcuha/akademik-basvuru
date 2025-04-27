import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AnnouncementTable = () => {
  return (
    <>
      <Table className="w-full bg-white shadow-md rounded-lg">
        <TableCaption>kullanıcılar</TableCaption>
        <TableHeader>
          <TableRow className="bg-green-300 text-green-800 p-4 rounded shadow">
            <TableHead className="w-[100px]">İlan Adı</TableHead>
            <TableHead>Birim</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead className="w-[100px]">İlan Adı</TableHead>
            <TableHead>Birim</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ankara</TableCell>
            <TableCell>istanbul</TableCell>
            <TableCell>kocaeli</TableCell>
            <TableCell>
              <button type="button">adana</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ankara</TableCell>
            <TableCell>istanbul</TableCell>
            <TableCell>kocaeli</TableCell>
            <TableCell>
              <button type="button">adana</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ankara</TableCell>
            <TableCell>istanbul</TableCell>
            <TableCell>kocaeli</TableCell>
            <TableCell>
              <button type="button">adana</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ankara</TableCell>
            <TableCell>istanbul</TableCell>
            <TableCell>kocaeli</TableCell>
            <TableCell>
              <button type="button">adana</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default AnnouncementTable;
