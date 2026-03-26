import React from "react";
import {
  PlusCircle,
  Dog,
  Hash,
  MapPin,
  Image as ImageIcon,
  Type,
  AlignLeft,
  Tag,
} from "lucide-react";
import Swal from "sweetalert2";

const AddPets = () => {
  const handleAddPets = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const petsData = Object.fromEntries(formData.entries());
    console.log(petsData);

    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After add data:", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Pet added successfully..!!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white flex items-center gap-3">
          <PlusCircle size={28} />
          <div>
            <h2 className="text-xl font-bold">List a New Pet</h2>
            <p className="text-indigo-100 text-sm">
              Fill in the details to find a perfect home.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleAddPets}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Type size={16} className="text-indigo-500" /> Pet Name
            </label>
            <input
              name="petName"
              type="text"
              placeholder="e.g. Buddy"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Tag size={16} className="text-indigo-500" /> Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Dog size={16} className="text-indigo-500" /> Breed
            </label>
            <input
              name="breed"
              type="text"
              placeholder="e.g. Golden Retriever"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Hash size={16} className="text-indigo-500" /> Age
            </label>
            <input
              name="age"
              type="text"
              placeholder="e.g. 2 Years"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MapPin size={16} className="text-indigo-500" /> Location
            </label>
            <input
              name="location"
              type="text"
              placeholder="City, Area"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <ImageIcon size={16} className="text-indigo-500" /> Pet Image URL
            </label>
            <input
              name="image"
              type="url"
              placeholder="https://example.com/pet-image.jpg"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <AlignLeft size={16} className="text-indigo-500" /> Short
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Tell us something about the pet's behavior and health status..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
            >
              List Pet for Adoption
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPets;
