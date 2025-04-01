import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ilanlar } from "../data/annoucments";
const AnnouncementTable = () => {
  return (
    <>
      <Table>
        <TableCaption>Akademik Başvuru Listesi</TableCaption>
        <TableHeader>
          <TableRow className="bg-blue-100 text-green-800 p-4 rounded shadow">
            <TableHead className="w-[100px]">İlan Adı</TableHead>
            <TableHead>Birim</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ilanlar.map((ilan) => {
            if (ilan.status === false) return null;
            return (
              <TableRow className="hover:bg-gray-50 transition" key={ilan.id}>
                <TableCell>{ilan.ilanAdi}</TableCell>
                <TableCell>{ilan.birim}</TableCell>
                <TableCell>{ilan.durum}</TableCell>
                <TableCell>{ilan.basvuruTarihi}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AnnouncementTable;
