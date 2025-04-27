import React, { useState } from "react";

import AnnouncementCard from "../components/announcement-card.jsx";
import { Card } from "@/components/ui/card";
import { IconFilePlus } from "@tabler/icons-react";
import AnnouncementDialog from "../components/manage-dialog.jsx";
import { useFetch } from "../hooks/use-fetch.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

import { useAuthStore } from "../store/auth-store.jsx";
import SelectComp from "../components/select.jsx";

const category = ["Docent", "Dr.Ogr.Uyesi", "Profesor"];

const ManagePosting = () => {
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [postingId, setPostingId] = useState(null);
  const [requirements, setRequirements] = useState([
    {
      requirement: "",
      requiredCount: 0,
    },
  ]);
  const { token } = useAuthStore();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    startDate: "",
    endDate: "",
    facultyName: "",
  });

  const {
    data: postingData,
    error,
    loading,
    fetchData: refetchPostingData,
  } = useFetch("http://localhost:3000/api/postings", "GET", token);

  const { data: facultyData } = useFetch(
    "http://localhost:3000/api/faculties",
    "GET",
    token
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/postings",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setFormData({
        title: "",
        category: "",
        startDate: "",
        endDate: "",
        facultyName: "",
      });
      setOpen(false);
      console.log(response.data);
      refetchPostingData();
    } catch (err) {
      console.log("Hata:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonDialog = () => {
    setOpen(!open);
  };

  const handleButtonClick = (id) => {
    console.log("Button clicked for item:", id);
    setUpdateOpen(!updateOpen);
    setPostingId(id);
  };

  const requirementsAdd = () => {
    setRequirements([
      ...requirements,
      {
        requirement: "",
        requiredCount: 0,
        postingId,
      },
    ]);
  };

  const requirementsSubmit = async (e) => {
    e.preventDefault();
    for (const req of requirements) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/postings/requirements`,
          {
            requirement: req.requirement,
            requiredCount: req.requiredCount,
            postingId: postingId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setRequirements([
          {
            requirement: "",
            requiredCount: 0,
          },
        ]);
        setUpdateOpen(false);
        refetchPostingData();
        console.log(response.data);
      } catch (err) {
        console.log("Hata:", err);
      }
    }
  };

  return (
    <div className="container mx-auto px-6 py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="border-4 border-dashed border-gray-200 bg-white shadow-lg py-6 px-3 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">
            İlan Oluştur
          </h2>
          <button
            onClick={handleButtonDialog}
            className="bg-white border-2 border-dashed text rounded"
          >
            <IconFilePlus
              className="inline-block cursor-pointer text-green-600 hover:text-green-800 hover:bg-green-100"
              width={64}
              height={64}
            />
          </button>
        </div>
      </Card>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {postingData &&
        postingData.map((item, index) => (
          <div key={index} className="h-full">
            <AnnouncementCard
              id={item.id}
              title={item.title}
              category={item.category}
              startDate={item.startDate}
              endDate={item.endDate}
              facultyName={item.facultyName}
              requirements={item.requirements}
              onClick={(id) => handleButtonClick(id)}
            />
          </div>
        ))}
      <AnnouncementDialog
        open={open}
        onOpenChange={setOpen}
        title="İlan Oluştur"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title">İlan Başlığı</label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="category">Unvan</label>
            <SelectComp
              options={category.map((cat) => ({
                value: cat,
                label: cat,
              }))}
              onChange={(value) =>
                setFormData({ ...formData, category: value })
              }
              value={formData.category}
              placeholder="Select Category"
            />
          </div>

          <div>
            <label htmlFor="startDate">Başlangıç</label>
            <Input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="endDate">Bitiş</label>
            <Input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="facultyName">Fakülte</label>
            <SelectComp
              options={facultyData?.map((faculty) => ({
                value: faculty.name,
                label: faculty.name,
              }))}
              onChange={(value) =>
                setFormData({ ...formData, facultyName: value })
              }
              value={formData.facultyName}
              placeholder="Select Faculty"
            />
          </div>

          <Button className="bg-green-600 hover:bg-green-700" type="submit">
            Submit
          </Button>
        </form>
      </AnnouncementDialog>
      <AnnouncementDialog
        open={updateOpen}
        onOpenChange={setUpdateOpen}
        title="Gereksinim Ekle"
      >
        <form onSubmit={requirementsSubmit} className="space-y-4">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Gereksinim"
                value={req.requirement}
                onChange={(e) =>
                  setRequirements((prev) =>
                    prev.map((r, i) =>
                      i === index ? { ...r, requirement: e.target.value } : r
                    )
                  )
                }
              />
              <Input
                type="number"
                placeholder="Sayısı"
                value={req.requiredCount}
                onChange={(e) =>
                  setRequirements((prev) =>
                    prev.map((r, i) =>
                      i === index ? { ...r, requiredCount: e.target.value } : r
                    )
                  )
                }
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={requirementsAdd}
            className="bg-green-600 hover:bg-green-700 mr-1"
          >
            Gereksinim Ekle
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Submit
          </Button>
        </form>
      </AnnouncementDialog>
    </div>
  );
};
export default ManagePosting;
