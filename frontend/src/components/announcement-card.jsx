import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AnnouncementCard = ({ title, category, startDate, endDate, faculty }) => {
  return (
    <Card className=" border border-green-600 bg-white shadow-md p-6 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl ">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>
            <span>Ünvan: {category}</span>
          </p>
          <p>
            <span>Fakülte: {faculty}</span>
          </p>
        </CardDescription>
        <CardDescription className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              <strong>Başlangıç:</strong> {startDate}
            </span>
            <span>
              <strong>Bitiş:</strong> {endDate}
            </span>
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
          Başvur
        </button>
      </CardFooter>
    </Card>
  );
};

export default AnnouncementCard;
